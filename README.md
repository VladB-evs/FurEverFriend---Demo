# Furry Companion Finder 🐾

A modern web application that helps connect people with adoptable pets using the Petfinder API. Find your perfect furry companion with our intuitive and user-friendly interface.

## Features

- **Featured Pets**: Browse through a curated list of adoptable pets
- **Pet Matching**: Find pets that match your preferences
- **Detailed Pet Profiles**: View comprehensive information about each pet
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Petfinder API

## Prerequisites

- Node.js (v14 or higher)
- npm or bun package manager
- Petfinder API credentials

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/furry-companion-finder.git
cd furry-companion-finder
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Create a `.env` file in the root directory with your Petfinder API credentials:
```env
VITE_PETFINDER_API_KEY="your_api_key"
VITE_PETFINDER_API_SECRET="your_api_secret"
```

4. Start the development server:
```bash
npm run dev
# or
bun dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
# or
bun run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components and routes
├── services/       # API services and utilities
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and helpers
└── main.tsx        # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Petfinder API](https://www.petfinder.com/developers/) for providing access to their database of adoptable pets
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast development environment
