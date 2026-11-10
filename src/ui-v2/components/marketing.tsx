import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Check, ImageIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Avatar } from './avatar';
import { Card } from './card';
import { Heading } from './typography';
import { Container } from '../layout/container';

/** Заглушка під ілюстрацію/фото. Замінюється на `<Image>` без зміни розмітки навколо. */
export function ImagePlaceholder({
  label,
  className,
}: {
  label?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={typeof label === 'string' ? label : undefined}
      className={cn(
        'flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-v2-2xl border border-dashed border-v2-border bg-v2-surface-subtle text-v2-subtle',
        className,
      )}
    >
      <ImageIcon className="size-8" aria-hidden />
      {label && <span className="text-sm">{label}</span>}
    </div>
  );
}

/** Верхня (hero) секція лендингу: текст зліва, медіа справа. */
export function HeroSection({
  title,
  subtitle,
  eyebrow,
  actions,
  footer,
  media,
  className,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  eyebrow?: React.ReactNode;
  /** Основний блок дій під підзаголовком (пошук, кнопки) */
  actions?: React.ReactNode;
  /** Додатковий рядок під діями (чипси, переваги) */
  footer?: React.ReactNode;
  media?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('ui-v2 bg-v2-hover py-12 md:py-20', className)}>
      <Container>
        <div className={cn('grid items-center gap-10', media && 'lg:grid-cols-[1.1fr_0.9fr]')}>
          <div>
            {eyebrow && (
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-v2-primary">
                {eyebrow}
              </p>
            )}
            <Heading level="display" as="h1" className="mb-6 text-4xl leading-[1.1] md:text-[56px]">
              {title}
            </Heading>
            {subtitle && (
              <p className="mb-8 max-w-xl text-lg leading-7 text-v2-muted">{subtitle}</p>
            )}
            {actions}
            {footer && <div className="mt-6">{footer}</div>}
          </div>
          {media && <div>{media}</div>}
        </div>
      </Container>
    </section>
  );
}

/** Заголовок секції з підзаголовком і дією справа. */
export function SectionHeader({
  title,
  subtitle,
  action,
  align = 'left',
  className,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'mb-8 flex flex-col gap-4 md:mb-10',
        align === 'center'
          ? 'items-center text-center'
          : 'sm:flex-row sm:items-end sm:justify-between',
        className,
      )}
    >
      <div className="max-w-2xl">
        <Heading level="h2" as="h2" className="mb-3">
          {title}
        </Heading>
        {subtitle && <p className="text-lg text-v2-muted">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

/** Показник: велике число + підпис (рядок довіри). */
export function StatItem({
  value,
  label,
  className,
}: {
  value: React.ReactNode;
  label: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('text-center md:text-left', className)}>
      <div className="text-3xl font-[550] leading-9 text-v2-ink md:text-4xl md:leading-10">
        {value}
      </div>
      <div className="mt-1 text-sm text-v2-muted">{label}</div>
    </div>
  );
}

/** Плитка категорії: іконка + назва; через `asChild` стає посиланням. */
export function CategoryTile({
  icon,
  title,
  description,
  asChild,
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Із `asChild` вміст беремо з дочірнього елемента (наприклад, next Link) */
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : 'a';
  return (
    <Comp
      className={cn(
        'group flex min-h-[132px] h-full flex-col justify-between gap-6 rounded-v2-2xl border border-v2-border bg-v2-surface p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-[transform,border-color,box-shadow] duration-150 ease-v2-out active:scale-[0.98] md:min-h-[150px]',
        'hover:border-v2-primary hover:shadow-[0_0_0_2px_var(--v2-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary',
        className,
      )}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {icon && <span className="text-v2-primary [&_svg]:size-7">{icon}</span>}
          <span className="font-[550] text-v2-ink underline-offset-4 group-hover:underline">
            {title}
          </span>
          {description && <span className="text-sm text-v2-muted">{description}</span>}
        </>
      )}
    </Comp>
  );
}

/** Картка переваги: іконка, заголовок, опис, необов'язкова дія. */
export function FeatureCard({
  icon,
  title,
  description,
  action,
  className,
}: {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn('flex h-full flex-col p-6 md:p-8', className)}>
      {icon && (
        <span className="mb-4 flex size-12 items-center justify-center rounded-v2-lg bg-v2-hover text-v2-primary [&_svg]:size-6">
          {icon}
        </span>
      )}
      <Heading level="h4" as="h3" className="mb-2">
        {title}
      </Heading>
      {description && <p className="flex-1 leading-6 text-v2-muted">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </Card>
  );
}

/** Відгук: цитата + автор з аватаром справа. */
export function Testimonial({
  quote,
  name,
  role,
  avatarSrc,
  className,
}: {
  quote: React.ReactNode;
  name: string;
  role?: React.ReactNode;
  avatarSrc?: string;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        'flex h-full flex-col rounded-v2-2xl bg-v2-surface/90 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] md:p-8',
        className,
      )}
    >
      <p className="mb-10 flex-1 text-lg font-[450] leading-7 text-v2-ink">“{quote}”</p>
      <div className="flex items-end justify-between gap-4">
        <div className="min-w-0">
          <div className="text-sm text-v2-ink">{name}</div>
          {role && <div className="text-sm text-v2-subtle">{role}</div>}
        </div>
        <Avatar size="md" src={avatarSrc} alt={name} fallback={name.slice(0, 1)} />
      </div>
    </Card>
  );
}

/** Фінальний заклик до дії: зелений градієнт, текст по центру. */
export function CtaBanner({
  title,
  description,
  actions,
  className,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-6 rounded-v2-2xl bg-gradient-to-r from-[#3b6dff] via-[#2557e6] to-[#1e8fe8] px-6 py-14 text-center text-white md:py-16',
        className,
      )}
    >
      <Heading level="h2" as="h2" className="max-w-2xl !text-white">
        {title}
      </Heading>
      {description && <p className="max-w-xl text-lg text-white/90">{description}</p>}
      {actions && <div className="flex flex-col gap-3 sm:flex-row">{actions}</div>}
    </div>
  );
}

/** Промо-смуга зі світло-зеленим градієнтом (над hero). */
export function PromoBanner({
  children,
  action,
  className,
}: {
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-start justify-between gap-2 rounded-v2-2xl bg-gradient-to-r from-[#e3edff] via-[#cfe0ff] to-[#dcecff] px-5 py-4 sm:flex-row sm:items-center md:px-8 md:py-6',
        className,
      )}
    >
      <p className="text-xl font-[450] text-v2-ink md:text-3xl">{children}</p>
      {action && <div className="text-sm font-[450] text-v2-ink underline">{action}</div>}
    </div>
  );
}

/** Сегментований перемикач (Hire / Work, For hiring / For finding work). */
export function SegmentedControl<T extends string>({
  value,
  onValueChange,
  options,
  tone = 'light',
  className,
}: {
  value: T;
  onValueChange: (value: T) => void;
  options: { value: T; label: React.ReactNode }[];
  tone?: 'light' | 'dark';
  className?: string;
}) {
  const dark = tone === 'dark';
  return (
    <div
      role="tablist"
      className={cn(
        'inline-flex rounded-v2-pill p-1',
        dark ? 'bg-white/20 backdrop-blur' : 'bg-v2-hover',
        className,
      )}
    >
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onValueChange(o.value)}
            className={cn(
              'rounded-v2-pill px-5 py-2 text-sm font-semibold transition-colors md:px-8',
              dark
                ? active
                  ? 'bg-[#1a1a1a] text-white'
                  : 'text-white hover:bg-white/10'
                : active
                  ? 'bg-v2-surface text-v2-ink shadow-sm'
                  : 'text-v2-muted hover:text-v2-ink',
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/** Картка тарифу/ролі з чекліст-перевагами. */
export function PlanCard({
  name,
  goal,
  description,
  includes,
  features,
  action,
  badge,
  highlighted,
  className,
}: {
  name: React.ReactNode;
  goal?: React.ReactNode;
  description?: React.ReactNode;
  includes?: React.ReactNode;
  features: React.ReactNode[];
  action?: React.ReactNode;
  badge?: React.ReactNode;
  highlighted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative flex h-full flex-col overflow-hidden rounded-v2-2xl border bg-v2-surface p-8 shadow-[0_2px_12px_rgba(0,0,0,0.05)]',
        highlighted ? 'border-[#c6efb0]' : 'border-v2-border',
        className,
      )}
    >
      {badge && (
        <span className="absolute right-0 top-0 rounded-bl-v2-2xl bg-[#b5f09a] px-4 py-2 text-sm font-semibold uppercase text-v2-ink">
          {badge}
        </span>
      )}
      <Heading level="h3" as="h3" className="mb-1">
        {name}
      </Heading>
      {goal && <p className="text-v2-muted">{goal}</p>}
      {description && <p className="mt-4 text-v2-muted">{description}</p>}
      <hr className="my-6 border-v2-border" />
      {includes && <p className="mb-4 font-[550] text-v2-muted">{includes}</p>}
      <ul className="mb-8 flex-1 space-y-4">
        {features.map((f, i) => (
          <li key={i} className="flex gap-3 text-v2-muted">
            <Check className="mt-0.5 size-5 shrink-0 text-v2-ink" aria-hidden />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {action}
    </div>
  );
}

/** Шапка інформаційної сторінки: велика заокруглена картка з заголовком, текстом і дією (як Upwork «How it works»). */
export function PageHero({
  title,
  subtitle,
  action,
  media,
  as: Title = 'h1',
  className,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
  as?: 'h1' | 'h2';
  /** Фото/ілюстрація на тлі (заглушка — градієнт) */
  media?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-v2-2xl bg-gradient-to-br from-[#0a1b45] via-[#12307a] to-[#121826] px-6 py-12 text-white md:min-h-[380px] md:px-16 md:py-20',
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(77,142,255,0.28),transparent_55%)]"
      />
      {media && <div className="absolute inset-0">{media}</div>}
      <div className="relative max-w-2xl">
        <Title className="mb-5 text-4xl font-[450] leading-[1.05] tracking-tight md:text-[64px]">
          {title}
        </Title>
        {subtitle && (
          <p className="mb-8 text-lg leading-7 text-white/90 md:text-2xl md:leading-9">
            {subtitle}
          </p>
        )}
        {action}
      </div>
    </div>
  );
}

/** Велика контурна картка з іконкою, заголовком, описом і дією (сітка «How to …»). */
export function InfoCard({
  icon,
  title,
  description,
  action,
  className,
}: {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex h-full flex-col rounded-v2-2xl border border-v2-border bg-v2-surface p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] md:p-10',
        className,
      )}
    >
      {icon && <span className="mb-6 text-v2-ink [&_svg]:size-8">{icon}</span>}
      <h3 className="mb-4 text-2xl font-[450] leading-8 md:text-3xl md:leading-9">{title}</h3>
      {description && <p className="flex-1 text-lg leading-7 text-v2-muted">{description}</p>}
      {action && <div className="mt-8">{action}</div>}
    </div>
  );
}

/** Пункт короткого факту: іконка, заголовок, текст (рядок «How payments work»). */
export function FactItem({
  icon,
  title,
  description,
}: {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <div>
      {icon && <span className="mb-4 flex text-v2-ink [&_svg]:size-8">{icon}</span>}
      <h3 className="mb-2 text-xl font-[550]">{title}</h3>
      {description && <p className="leading-6 text-v2-muted">{description}</p>}
    </div>
  );
}
