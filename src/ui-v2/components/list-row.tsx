import * as React from 'react';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

/** Група рядків-посилань із розділювачами (швидкі посилання на головній у Upwork). */
export function ListRowGroup({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn('divide-y divide-v2-border border-y border-v2-border', className)}
      {...props}
    />
  );
}

const rowBase =
  'flex min-h-14 w-full items-center gap-3 px-4 py-3 text-left text-base font-[450] text-v2-ink outline-none transition-colors duration-150 ease-v2-out hover:bg-v2-hover active:bg-v2-hover focus-visible:bg-v2-hover';

/**
 * Рядок списку: [іконка] текст [опис] ......... [trailing | ›]. Для `asChild` обгорніть у `Link`:
 * `<ListRow asChild><Link href=…>…</Link></ListRow>` — класи передаються дочірньому елементу.
 */
export function ListRow({
  icon,
  description,
  trailing,
  chevron = true,
  asChild,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  icon?: React.ReactNode;
  description?: React.ReactNode;
  trailing?: React.ReactNode;
  chevron?: boolean;
  /** Єдиний дочірній елемент (посилання) стає самим рядком. */
  asChild?: boolean;
}) {
  const content = (inner: React.ReactNode) => (
    <>
      {icon && <span className="shrink-0 text-v2-ink [&_svg]:size-6">{icon}</span>}
      <span className="min-w-0 flex-1">
        <span className="block truncate">{inner}</span>
        {description && (
          <span className="block truncate text-sm font-normal text-v2-muted">{description}</span>
        )}
      </span>
      {trailing}
      {chevron && !trailing && <ChevronRight aria-hidden className="size-5 shrink-0 text-v2-ink" />}
    </>
  );

  if (
    asChild &&
    React.isValidElement<{ className?: string; children?: React.ReactNode }>(children)
  ) {
    return (
      <li>
        {React.cloneElement(children, {
          className: cn(rowBase, className, children.props.className),
          children: content(children.props.children),
        })}
      </li>
    );
  }
  return (
    <li>
      <div className={cn(rowBase, className)} {...props}>
        {content(children)}
      </div>
    </li>
  );
}

/** Факт про запит у списку «іконка + значення + підпис» (Hourly / Duration / Experience в Upwork). */
export function DetailRow({
  icon,
  value,
  label,
  className,
}: {
  icon: React.ReactNode;
  value: React.ReactNode;
  label: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex items-start gap-4 py-3', className)}>
      <span className="mt-0.5 shrink-0 text-v2-ink [&_svg]:size-6">{icon}</span>
      <div className="min-w-0">
        <p className="text-base font-[450] text-v2-ink">{value}</p>
        <p className="text-sm text-v2-muted">{label}</p>
      </div>
    </div>
  );
}
