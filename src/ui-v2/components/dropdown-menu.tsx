'use client';

import * as React from 'react';
import * as MenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

export const DropdownMenu = MenuPrimitive.Root;
export const DropdownMenuTrigger = MenuPrimitive.Trigger;
export const DropdownMenuGroup = MenuPrimitive.Group;

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Content> & { surface?: 'menu' | 'popover' }
>(({ className, sideOffset = 4, surface = 'menu', ...props }, ref) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'ui-v2 z-[60] min-w-[12rem] overflow-hidden rounded-v2-xl bg-v2-surface',
        // surface="popover" — меню акаунта: рамка, м'яка тінь, w 281px, відступи 8/4 (виміряно)
        surface === 'popover'
          ? 'w-[281px] border border-v2-border px-1 py-2 shadow-v2-popover'
          : 'py-3 shadow-v2-pop',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        className,
      )}
      {...props}
    />
  </MenuPrimitive.Portal>
));
DropdownMenuContent.displayName = 'DropdownMenuContent';

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Item> & { compact?: boolean }
>(({ className, compact, ...props }, ref) => (
  <MenuPrimitive.Item
    ref={ref}
    className={cn(
      'flex cursor-pointer select-none items-center gap-3 px-4 text-sm text-v2-ink outline-none',
      // compact — пункти меню акаунта: h 32px, вага 450, radius 4px (виміряно)
      compact ? 'h-8 rounded-v2-sm py-1 font-[450]' : 'py-1.5 font-[550]',
      '[&_svg]:size-5 [&_svg]:shrink-0',
      'data-[highlighted]:bg-v2-hover data-[disabled]:pointer-events-none data-[disabled]:text-v2-disabled-text',
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = 'DropdownMenuItem';

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenuPrimitive.CheckboxItem
    ref={ref}
    checked={checked}
    className={cn(
      'flex cursor-pointer select-none items-center gap-3 px-4 py-1.5 text-sm font-[550] text-v2-ink outline-none',
      'data-[highlighted]:bg-v2-hover data-[disabled]:pointer-events-none data-[disabled]:text-v2-disabled-text',
      className,
    )}
    {...props}
  >
    <span
      className={cn(
        'flex size-5 shrink-0 items-center justify-center rounded-v2-md border transition-colors',
        checked
          ? 'border-v2-primary bg-v2-primary text-v2-on-primary'
          : 'border-v2-border bg-v2-surface',
      )}
    >
      <MenuPrimitive.ItemIndicator>
        <Check className="size-3.5" strokeWidth={3} />
      </MenuPrimitive.ItemIndicator>
    </span>
    {children}
  </MenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

/** Сірий заголовок групи ("Accounting & Consulting"). */
export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Label>
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Label
    ref={ref}
    className={cn('px-4 pb-2 pt-1 text-sm font-[450] text-v2-muted', className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = 'DropdownMenuLabel';

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Separator
    ref={ref}
    className={cn('my-2 h-px bg-v2-border', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';
