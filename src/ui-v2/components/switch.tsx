'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

/** Перемикач: вимкнений — світло-сірий, увімкнений — темний (за референсом). */
export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      // виміряно: 45×24, радіус 24px, повзунок 18px; on #333
      'peer inline-flex h-6 w-[45px] shrink-0 cursor-pointer items-center rounded-v2-pill p-[3px] transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary focus-visible:ring-offset-2',
      'data-[state=checked]:bg-v2-switch-on data-[state=unchecked]:bg-v2-switch-off',
      'disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb className="pointer-events-none block size-[18px] rounded-full bg-v2-surface shadow-sm transition-transform data-[state=checked]:translate-x-[21px] data-[state=unchecked]:translate-x-0" />
  </SwitchPrimitive.Root>
));
Switch.displayName = 'Switch';

/** Рядок "підпис + перемикач" (Online for messages). */
export function SwitchField({
  label,
  className,
  id,
  ...props
}: React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & { label: React.ReactNode }) {
  const autoId = React.useId();
  const fieldId = id ?? autoId;
  return (
    <div className={cn('flex items-center justify-between gap-4', className)}>
      <label htmlFor={fieldId} className="cursor-pointer text-sm font-[450] text-v2-ink">
        {label}
      </label>
      <Switch id={fieldId} {...props} />
    </div>
  );
}
