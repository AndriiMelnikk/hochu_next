'use client';

import Link from '@/shared/ui/link';
import { LogIn, UserPlus, UserCircle } from 'lucide-react';
import { routes } from '@/app/router/routes';
import { useLingui } from '@lingui/react';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/shared/utils/cn';
import { buildAuthHref, getReturnUrlFromLocation } from '../lib/returnUrl';
import { Button, StickyActionBar, StickyActionBarSpacer } from '@/ui-v2';

interface AuthRequiredProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function AuthRequired({ title, description, icon, className }: AuthRequiredProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const pathname = usePathname();
  const returnUrl = getReturnUrlFromLocation(pathname);

  const registerHref = buildAuthHref(routes.REGISTER, returnUrl);
  const loginHref = buildAuthHref(routes.LOGIN, returnUrl);

  return (
    <div className={cn('flex flex-col items-center py-8 text-center md:py-16', className)}>
      <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-v2-hover text-v2-primary">
        {icon || <UserCircle className="size-8" />}
      </div>
      <h2 className="mb-2 text-2xl font-[550]">{title}</h2>
      <p className="max-w-md text-v2-muted">{description}</p>

      {/* lg+: кнопки під текстом */}
      <div className="mt-8 hidden gap-3 lg:flex">
        <Button asChild className="gap-2">
          <Link href={registerHref}>
            <UserPlus className="size-5" />
            {t('request.create.authRequired.register')}
          </Link>
        </Button>
        <Button asChild variant="outline" className="gap-2">
          <Link href={loginHref}>
            <LogIn className="size-5" />
            {t('request.create.authRequired.login')}
          </Link>
        </Button>
      </div>

      {/* Мобільний: дії у закріпленій нижній панелі */}
      <StickyActionBarSpacer className="h-16" />
      <StickyActionBar>
        <div className="flex gap-3">
          <Button asChild variant="outline" className="h-12 flex-1 text-base">
            <Link href={loginHref}>{t('request.create.authRequired.login')}</Link>
          </Button>
          <Button asChild className="h-12 flex-1 text-base">
            <Link href={registerHref}>{t('request.create.authRequired.register')}</Link>
          </Button>
        </div>
      </StickyActionBar>
    </div>
  );
}
