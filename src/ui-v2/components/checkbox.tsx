'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer size-5 shrink-0 rounded-v2-md border border-v2-border bg-v2-surface transition-colors',
      'hover:border-v2-border-strong',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary focus-visible:ring-offset-2',
      'data-[state=checked]:border-v2-primary data-[state=checked]:bg-v2-primary data-[state=checked]:text-v2-on-primary',
      'data-[state=indeterminate]:border-v2-primary data-[state=indeterminate]:bg-v2-primary data-[state=indeterminate]:text-v2-on-primary',
      'disabled:cursor-not-allowed disabled:bg-v2-disabled-bg disabled:hover:border-v2-border',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center">
      <Check className="size-3.5" strokeWidth={3} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = 'Checkbox';

/** Чекбокс з підписом і необов'язковим лічильником: "Intermediate (33)". */
export function CheckboxField({
  label,
  count,
  className,
  id,
  ...props
}: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
  label: React.ReactNode;
  count?: number;
}) {
  const autoId = React.useId();
  const fieldId = id ?? autoId;
  return (
    <div className={cn('flex items-center gap-3 py-2', className)}>
      <Checkbox id={fieldId} {...props} />
      <label htmlFor={fieldId} className="cursor-pointer text-sm font-semibold text-v2-ink">
        {label}
        {count !== undefined && <span className="ml-1 font-[450] text-v2-muted">({count})</span>}
      </label>
    </div>
  );
}
