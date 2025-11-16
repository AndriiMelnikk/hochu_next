import Link from "next/link";
import { Button } from "@/components/ui/button";
import { routes } from "@/app/router/routes";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Сторінку не знайдено</p>
        <Button asChild>
          <Link href={routes.HOME}>Повернутися на головну</Link>
        </Button>
      </div>
    </div>
  );
}

