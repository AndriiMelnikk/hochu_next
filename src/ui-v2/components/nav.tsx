import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

/**
 * Бокова навігація розділу (Settings): вертикальна тонка лінія зліва,
 * активний пункт має темну смугу і темний текст, решта — приглушені.
 */
export function SideNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <nav aria-label="Section" className={className} {...props} />;
}

export function SideNavList({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn('flex flex-col border-l border-v2-border', className)} {...props} />;
}

export function SideNavItem({
  active,
  asChild,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { active?: boolean; asChild?: boolean }) {
  const Comp = asChild ? Slot : 'a';
  return (
    <li className="relative">
      <Comp
        aria-current={active ? 'page' : undefined}
        className={cn(
          // виміряно: h 32px, 16px/450; неактивний #686e73, активний #1a1a1a
          'flex h-8 items-center pl-3 text-base font-[450] transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary',
          active
            ? 'text-v2-ink before:absolute before:-left-px before:top-0 before:h-full before:w-[3px] before:bg-v2-ink'
            : 'text-v2-secondary hover:text-v2-ink',
          className,
        )}
        {...props}
      />
    </li>
  );
}

/** Вузька ліва панель іконок застосунку (Search, Home, Messages ...). */
export function RailNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      aria-label="Main"
      className={cn(
        // виміряно: панель 80px, пункти 72×50 з radius 4px
        'flex w-20 flex-col items-center gap-1 bg-v2-surface-subtle px-1 py-3',
        className,
      )}
      {...props}
    />
  );
}

export function RailNavItem({
  icon,
  label,
  active,
  asChild,
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : 'a';
  return (
    <Comp
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex h-[50px] w-full flex-col items-center justify-center gap-1 rounded-v2-sm text-[10px] font-[450] text-v2-ink transition-colors',
        'hover:bg-v2-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary',
        '[&_svg]:size-5',
        active && 'bg-v2-surface-muted',
        className,
      )}
      {...props}
    >
      {icon}
      <span>{label}</span>
      {children}
    </Comp>
  );
}
