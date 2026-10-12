'use client';

import { Button } from '@shared/ui/button';
import Link from '@/shared/ui/link';
import { routes } from '@/app/router/routes';
import { useLingui } from '@lingui/react';
import { usePathname } from 'next/navigation';
import { buildAuthHref, getReturnUrlFromLocation } from '../lib/returnUrl';

interface RegisterButtonProps {
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon';
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const RegisterButton = ({
  size = 'sm',
  className,
  fullWidth,
  onClick,
}: RegisterButtonProps) => {
  const { i18n } = useLingui();
  const pathname = usePathname();
  const returnUrl = getReturnUrlFromLocation(pathname);

  return (
    <Button variant="gradient" size={size} className={fullWidth ? 'w-full' : className} asChild>
      <Link href={buildAuthHref(routes.REGISTER, returnUrl)} onClick={onClick}>
        {i18n._('common.nav.register')}
      </Link>
    </Button>
  );
};
