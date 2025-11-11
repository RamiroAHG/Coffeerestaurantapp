import { Coffee, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="px-4">
        {/* Brand */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Coffee className="h-6 w-6 text-amber-400" />
            <span className="font-semibold text-lg">Kfe Los Balcones</span>
          </div>
          <p className="text-primary-foreground/80 text-sm">
            Where the neighborhood gathers. Serving authentic coffee & homemade treats since 2018.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-6">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-amber-400 h-10 w-10">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-amber-400 h-10 w-10">
            <Instagram className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-amber-400 h-10 w-10">
            <Twitter className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#home" className="text-primary-foreground/80 hover:text-amber-400 transition-colors text-sm">
            Home
          </a>
          <a href="#menu" className="text-primary-foreground/80 hover:text-amber-400 transition-colors text-sm">
            Menu
          </a>
          <a href="#about" className="text-primary-foreground/80 hover:text-amber-400 transition-colors text-sm">
            About
          </a>
          <a href="#contact" className="text-primary-foreground/80 hover:text-amber-400 transition-colors text-sm">
            Contact
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center text-primary-foreground/80 text-sm space-y-1 mb-6">
          <p>Corner of the Banks, 1 block to the East</p>
          <p>(809) 555-CAFE | hello@kfelosbalcones.com</p>
          <p className="text-xs text-primary-foreground/60">Mon-Fri: 6:30AM - 9PM | Sat-Sun: 7AM - 10PM</p>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-4 text-center text-primary-foreground/60 text-xs">
          <p>&copy; 2025 Kfe Los Balcones. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}