'use client';

import type { ReactNode } from 'react';
import { useId } from 'react';

import { cn } from '@/lib/utils';
import { Switch } from '@/ui-v2';

interface ToggleRowProps {
  title: ReactNode;
  description?: ReactNode;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  /** Додатковий контент під рядком (наприклад, фільтри), показується лише коли ввімкнено. */
  children?: ReactNode;
  className?: string;
}

/** Рядок «назва + опис + перемикач»: клікабельний по всій ширині, ціль ≥ 56px. */
export function ToggleRow({
  title,
  description,
  checked,
  onCheckedChange,
  disabled,
  children,
  className,
}: ToggleRowProps) {
  const id = useId();
  return (
    <div className={cn('py-1', className)}>
      <div className="flex min-h-14 items-center gap-4 py-2">
        <label htmlFor={id} className="min-w-0 flex-1 cursor-pointer">
          <span className="block text-base font-[500] leading-snug text-v2-ink">{title}</span>
          {description && (
            <span className="mt-0.5 block text-sm leading-snug text-v2-muted">{description}</span>
          )}
        </label>
        <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} disabled={disabled} />
      </div>
      {checked && children}
    </div>
  );
}
