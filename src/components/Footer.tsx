import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 mt-auto bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            FurEverFriends
          </span>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link to="/TermsOfService" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/PrivacyPolicy" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Project by{" "}
          <a
            href="https://github.com/VladB-evs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors duration-200"
          >
            Vlad Bacila
          </a>
        </div>
      </div>
    </footer>
  );
};