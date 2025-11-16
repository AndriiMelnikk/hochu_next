import { Link } from "react-router-dom";
import { Button } from "@shared/ui/button";
import { routes } from "@app/router/routes";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Сторінку не знайдено</p>
        <Link to={routes.HOME}>
          <Button>Повернутися на головну</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

