// Petfinder API service implementation

interface PetfinderConfig {
  apiKey: string;
  secret: string;
}

interface SearchParams {
  limit?: number;
  status?: string;
  type?: string;
  location?: string;
}

class PetfinderService {
  private apiKey: string;
  private secret: string;
  private baseUrl = 'https://api.petfinder.com/v2';
  private accessToken: string | null = null;

  constructor(config: PetfinderConfig) {
    this.apiKey = config.apiKey;
    this.secret = config.secret;
  }

  private async getAccessToken(): Promise<string> {
    if (this.accessToken) return this.accessToken;

    const response = await fetch(`${this.baseUrl}/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${this.apiKey}&client_secret=${this.secret}`,
    });

    const data = await response.json();
    this.accessToken = data.access_token;
    return this.accessToken;
  }

  private async fetchWithAuth(endpoint: string, options: RequestInit = {}) {
    const token = await this.getAccessToken();
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Petfinder API error: ${response.statusText}`);
    }

    return response.json();
  }

  async searchPets(params: SearchParams = {}) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.append(key, value.toString());
    });

    const data = await this.fetchWithAuth(`/animals?${searchParams.toString()}`);
    
    return data.animals.map((animal: any) => ({
      id: animal.id,
      name: animal.name,
      age: animal.age,
      breed: animal.breeds.primary,
      image: animal.photos[0]?.large || '/pet-placeholder.svg',
      distance: animal.distance ? `${Math.round(animal.distance)} miles` : 'Unknown',
      location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
      description: animal.description,
      url: animal.url,
      type: animal.type
    }));
  }

  async getFeaturedPets(limit: number = 6) {
    return this.searchPets({ limit, status: 'adoptable' });
  }
}

// Initialize the service with environment variables
export const petfinderService = new PetfinderService({
  apiKey: import.meta.env.VITE_PETFINDER_API_KEY || '',
  secret: import.meta.env.VITE_PETFINDER_SECRET || ''
});