"use client";

import { Button } from "@shared/ui/button";
import { RegisterButton } from "@/features/auth";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import { routes } from "@app/router/routes";
import { HeroBadge } from "@/shared/ui/hero-badge";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
          <Link href={routes.HOME} className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Hochu
            </div>
         
          </Link>
          <HeroBadge>Бета-версія</HeroBadge>
          </div>
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={routes.BROWSE} className="text-foreground hover:text-primary transition-colors">
              Переглянути запити
            </Link>
            <Link href={routes.CREATE} className="text-foreground hover:text-primary transition-colors">
              Створити запит
            </Link>
            <Link href={routes.HOW_IT_WORKS} className="text-foreground hover:text-primary transition-colors">
              Як це працює
            </Link>
            <Link href={routes.PROFILE}>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </Link>
            <Link href={routes.LOGIN}>
              <Button variant="outline" size="sm">
                Увійти
              </Button>
            </Link>
            <RegisterButton />
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
              href={routes.BROWSE} 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Переглянути запити
            </Link>
            <Link 
              href={routes.CREATE} 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Створити запит
            </Link>
            <Link 
              href={routes.HOW_IT_WORKS} 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Як це працює
            </Link>
            <Link 
              href={routes.PROFILE} 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Профіль
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Link href={routes.LOGIN} onClick={() => setIsOpen(false)}>
                <Button variant="outline" size="sm" className="w-full">
                  Увійти
                </Button>
              </Link>
              <RegisterButton size="sm" fullWidth onClick={() => setIsOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

