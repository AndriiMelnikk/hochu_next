import Link from 'next/link';
import { Button } from '@shared/ui/button';
import { routes } from '@/app/router/routes';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <p className="mb-6 text-sm text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <Link href={routes.HOME}>
          <Button>Повернутися на головну</Button>
        </Link>
      </div>
    </div>
  );
}
