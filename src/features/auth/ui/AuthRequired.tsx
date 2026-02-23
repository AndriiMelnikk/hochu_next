import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { LogIn, UserPlus, UserCircle } from 'lucide-react';
import { routes } from '@/app/router/routes';
import { useLingui } from '@lingui/react';
import { ReactNode } from 'react';
import { cn } from '@/shared/utils/cn';

interface AuthRequiredProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function AuthRequired({ title, description, icon, className }: AuthRequiredProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className={cn("flex flex-col items-center justify-center py-16 text-center", className)}>
      <div className="bg-primary/10 p-6 rounded-full mb-6">
        {icon || <UserCircle className="h-16 w-16 text-primary" />}
      </div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href={routes.REGISTER}>
          <Button size="lg" className="w-full sm:w-auto gap-2">
            <UserPlus className="h-5 w-5" />
            {t('request.create.authRequired.register')}
          </Button>
        </Link>
        <Link href={routes.LOGIN}>
          <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
            <LogIn className="h-5 w-5" />
            {t('request.create.authRequired.login')}
          </Button>
        </Link>
      </div>
    </div>
  );
}
