import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const headingVariants = cva('font-[550] text-v2-ink', {
  variants: {
    level: {
      display: 'text-[56px] leading-[56px] font-[500] tracking-tight', // welcome / hero
      h1: 'text-[40px] leading-[48px]', // заголовок сторінки
      h2: 'text-[32px] leading-10', // ім'я, великі розділи
      title: 'text-[28px] leading-9', // заголовок підсторінки (My Info)
      h3: 'text-2xl leading-8', // блоки, модалки
      h4: 'text-xl leading-7', // h5 референсу: підсекції
    },
  },
  defaultVariants: { level: 'h3' },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
}

/** Шкала заголовків. `level` задає вигляд, `as` — семантичний тег. */
export function Heading({ level, as, className, ...props }: HeadingProps) {
  const Comp = as ?? (level === 'display' ? 'h1' : level === 'title' ? 'h2' : (level ?? 'h3'));
  return <Comp className={cn(headingVariants({ level }), className)} {...props} />;
}

/** Зелене жирне посилання ("Change password", "Flag as inappropriate"). */
export const TextLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { asChild?: boolean }
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a';
  return (
    <Comp
      ref={ref}
      className={cn(
        'inline-flex items-center gap-2 text-sm font-semibold text-v2-primary underline-offset-4 hover:underline',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary [&_svg]:size-4',
        className,
      )}
      {...props}
    />
  );
});
TextLink.displayName = 'TextLink';

/** Пара "підпис — значення" (My Info, About the client). */
export function DescriptionItem({
  label,
  children,
  className,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('space-y-0.5', className)}>
      <dt className="text-sm font-[450] text-v2-muted">{label}</dt>
      <dd className="text-sm font-[450] text-v2-ink">{children}</dd>
    </div>
  );
}
