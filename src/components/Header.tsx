import { Coffee, Menu, X, LogOut, User } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface HeaderProps {
  currentPage?: string;
  setCurrentPage?: (page: "home" | "menu" | "about" | "contact") => void;
  user?: { email: string };
  onLogout?: () => void;
}

export function Header({ currentPage, setCurrentPage, user, onLogout }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", page: "home" as const },
    { name: "Menu", page: "menu" as const },
    { name: "About", page: "about" as const },
    { name: "Contact", page: "contact" as const },
  ];

  const handleNavClick = (page: "home" | "menu" | "about" | "contact") => {
    if (setCurrentPage) {
      setCurrentPage(page);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <Coffee className="h-7 w-7 text-amber-600" />
            <span className="font-semibold text-lg">Kfe Los Balcones</span>
          </div>

          {/* User Info & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {user && (
              <div className="flex items-center space-x-2 text-sm text-gray-600 mr-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">{user.email.split('@')[0]}</span>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="pb-4 border-t">
            <nav className="flex flex-col space-y-1 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.page)}
                  className={`py-3 px-2 text-left transition-colors rounded-md hover:bg-amber-50 ${
                    currentPage === item.page 
                      ? "text-amber-600 bg-amber-50" 
                      : "text-foreground hover:text-amber-600"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              {user && onLogout && (
                <>
                  <div className="border-t my-2"></div>
                  <button
                    onClick={() => {
                      onLogout();
                      setIsMenuOpen(false);
                    }}
                    className="py-3 px-2 text-left text-red-600 hover:text-red-700 transition-colors rounded-md hover:bg-red-50 flex items-center space-x-2"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign out</span>
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}