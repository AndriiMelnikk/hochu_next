import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const cardVariants = cva('text-v2-ink', {
  variants: {
    variant: {
      outline: 'rounded-v2-2xl border border-v2-border bg-v2-surface',
      tinted: 'rounded-v2-2xl bg-v2-info-bg',
      /** Сіра картка без рамки (Connects: статистика, "Understanding Connects") */
      muted: 'rounded-v2-2xl bg-v2-surface-subtle',
      /** Промо-блок із зеленою рамкою (Try Freelancer Plus) */
      highlight: 'rounded-v2-xl border border-v2-primary bg-v2-surface',
      flat: 'rounded-v2-2xl bg-v2-surface',
    },
  },
  defaultVariants: { variant: 'outline' },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant }), className)} {...props} />
  ),
);
Card.displayName = 'Card';

/** Секція всередині картки; між секціями — тонка лінія. */
export function CardSection({
  className,
  interactive,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        'border-t border-v2-border p-8 first:border-t-0',
        interactive && 'cursor-pointer transition-colors hover:bg-v2-hover',
        className,
      )}
      {...props}
    />
  );
}

/** Заголовок картки з дією справа (олівець, шестерня). */
export function CardHeader({
  className,
  title,
  action,
  ...props
}: Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
  title: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className={cn('flex items-center justify-between gap-4', className)} {...props}>
      <h3 className="text-2xl font-[550] leading-8">{title}</h3>
      {action}
    </div>
  );
}

/**
 * Рядок налаштувань всередині картки (Settings): заголовок, опис і дія справа
 * (кнопка Disconnect/Connect або Switch). Рядки розділені лінією.
 */
export function SettingsRow({
  title,
  description,
  action,
  className,
  ...props
}: Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-6 border-t border-v2-border px-8 py-6 first:border-t-0',
        className,
      )}
      {...props}
    >
      <div className="min-w-0 space-y-2">
        <p className="text-xl font-[500] leading-7">{title}</p>
        {description && <p className="text-sm text-v2-ink">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

/** Картка-метрика: підпис, велике число, посилання/дія. */
export function StatCard({
  label,
  value,
  action,
  className,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <Card variant="muted" className={cn('space-y-1 p-6', className)}>
      <p className="text-xs font-[450] text-v2-muted">{label}</p>
      <p className="text-[40px] font-[550] leading-[48px]">{value}</p>
      {action && <div className="pt-1 text-sm font-semibold">{action}</div>}
    </Card>
  );
}

/** Складений вміст картки: `CardHead` (заголовок+опис), `CardBody` (тіло). */
export function CardHead({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-1 p-6 pb-0', className)} {...props} />;
}
export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('text-xl font-[550] leading-7', className)} {...props} />;
}
export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm text-v2-muted', className)} {...props} />;
}
export function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6', className)} {...props} />;
}
