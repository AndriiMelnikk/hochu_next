import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Hochu
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/browse" className="text-foreground hover:text-primary transition-colors">
              Переглянути запити
            </Link>
            <Link to="/create" className="text-foreground hover:text-primary transition-colors">
              Створити запит
            </Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
              Як це працює
            </Link>
            <Button variant="outline" size="sm">
              Увійти
            </Button>
            <Button size="sm" className="bg-gradient-primary">
              Реєстрація
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              to="/browse" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Переглянути запити
            </Link>
            <Link 
              to="/create" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Створити запит
            </Link>
            <Link 
              to="/how-it-works" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Як це працює
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm">
                Увійти
              </Button>
              <Button size="sm" className="bg-gradient-primary">
                Реєстрація
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
