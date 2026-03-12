import { Button } from '@shared/ui/button';
import Link from 'next/link';
import { routes } from '@/app/router/routes';
import { useLingui } from '@lingui/react';

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

  return (
    <Button variant="gradient" size={size} className={fullWidth ? 'w-full' : className} asChild>
      <Link href={routes.REGISTER} onClick={onClick}>
        {i18n._('common.nav.register')}
      </Link>
    </Button>
  );
};
