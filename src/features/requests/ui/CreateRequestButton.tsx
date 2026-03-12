import { Button } from '@shared/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { routes } from '@/app/router/routes';
import { useLingui } from '@lingui/react';

interface CreateRequestButtonProps {
  className?: string;
}

export const CreateRequestButton = ({ className }: CreateRequestButtonProps) => {
  const { i18n } = useLingui();

  return (
    <Button variant="hero" size="xl" className={className} asChild>
      <Link href={routes.CREATE}>
        {i18n._('common.nav.createRequest')}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </Button>
  );
};
