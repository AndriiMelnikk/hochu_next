import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Hochu
            </div>
            <p className="text-muted-foreground text-sm">
              Платформа бажань і можливостей. Скажи що хочеш, і ті хто може це дати, самі тебе знайдуть.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Платформа</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/browse" className="hover:text-primary transition-colors">Переглянути запити</Link></li>
              <li><Link to="/create" className="hover:text-primary transition-colors">Створити запит</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">Як це працює</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Ціни</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Компанія</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">Про нас</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Блог</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Кар'єра</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Контакти</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Правова інформація</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/terms" className="hover:text-primary transition-colors">Умови використання</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Політика конфіденційності</Link></li>
              <li><Link to="/support" className="hover:text-primary transition-colors">Підтримка</Link></li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Hochu. Всі права захищені.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
