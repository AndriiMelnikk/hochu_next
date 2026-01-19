import { Button } from '@shared/ui/button';
import Link from 'next/link';
import { routes } from '@/app/router/routes';

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
  return (
    <Button variant="gradient" size={size} className={fullWidth ? 'w-full' : className} asChild>
      <Link href={routes.REGISTER} onClick={onClick}>
        Реєстрація
      </Link>
    </Button>
  );
};
