'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex h-10 w-full items-center justify-between gap-2 rounded-v2-xl border border-v2-border bg-v2-surface',
      'py-0 pl-4 pr-2 text-left text-sm font-[450] text-v2-ink transition-colors',
      'hover:border-v2-border-strong',
      'focus-visible:border-v2-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-v2-primary',
      'data-[placeholder]:text-v2-muted data-[state=open]:border-v2-primary',
      'disabled:cursor-not-allowed disabled:bg-v2-disabled-bg disabled:text-v2-disabled-text disabled:hover:border-v2-border',
      className,
    )}
    {...props}
  >
    <span className="truncate">{children}</span>
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="size-6 shrink-0 text-v2-ink" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = 'SelectTrigger';

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      position={position}
      sideOffset={4}
      className={cn(
        'ui-v2 relative z-[60] max-h-80 min-w-[8rem] overflow-hidden rounded-v2-xl bg-v2-surface shadow-v2-outline',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        position === 'popper' && 'w-[var(--radix-select-trigger-width)]',
        className,
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className="py-3">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = 'SelectContent';

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('px-4 pb-2 pt-1 text-sm font-[450] text-v2-muted', className)}
    {...props}
  />
));
SelectLabel.displayName = 'SelectLabel';

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-pointer select-none items-center px-4 py-1.5 pr-10 text-sm font-[550] text-v2-ink outline-none',
      'data-[highlighted]:bg-v2-hover data-[disabled]:pointer-events-none data-[disabled]:text-v2-disabled-text',
      className,
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="absolute right-3">
      <Check className="size-4 text-v2-primary" strokeWidth={3} />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName = 'SelectItem';
