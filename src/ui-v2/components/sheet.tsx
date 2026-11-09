'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;

/** Бічна панель (мобільне меню): `side` — left або right, ширина 280px. */
export const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { side?: 'left' | 'right' }
>(({ className, children, side = 'right', ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-v2-backdrop data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'ui-v2 fixed inset-y-0 z-50 flex w-[280px] max-w-[85vw] flex-col gap-4 bg-v2-surface p-6 shadow-v2-float',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        side === 'right'
          ? 'right-0 data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right'
          : 'left-0 data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        aria-label="Close"
        className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-v2-pill hover:bg-v2-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary"
      >
        <X className="size-5" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
SheetContent.displayName = 'SheetContent';

export const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col gap-1 pr-10', className)} {...props} />
);

export const SheetTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn('text-lg font-[550]', className)} {...props} />
));
SheetTitle.displayName = 'SheetTitle';
