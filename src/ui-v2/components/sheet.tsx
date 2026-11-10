'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { mergeRefs, useSwipeToClose } from './use-swipe-to-close';

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;

type SheetSide = 'left' | 'right' | 'full';

const SIDE_CLASS: Record<SheetSide, string> = {
  right:
    'right-0 w-[280px] max-w-[85vw] p-6 data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right',
  left: 'left-0 w-[280px] max-w-[85vw] p-6 data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left',
  // Повноекранне мобільне меню (гість): без власних відступів, їх задає вміст
  full: 'inset-x-0 w-full p-0 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
};

/**
 * Бічна панель (мобільне меню): `side` — left/right (280px) або full (на весь екран).
 * `hideClose` — прибрати стандартний хрестик, коли вміст малює власний.
 */
export const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    side?: SheetSide;
    hideClose?: boolean;
  }
>(({ className, children, side = 'right', hideClose, ...props }, ref) => {
  const { setContent, setOverlay, setDrag, setCloser } = useSwipeToClose({
    axis: 'x',
    sign: side === 'left' ? -1 : 1,
    enabled: side !== 'full',
  });
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        ref={setOverlay}
        className="fixed inset-0 z-50 bg-v2-backdrop ease-v2-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:[animation-duration:200ms] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:[animation-duration:200ms]"
      />
      <DialogPrimitive.Content
        ref={mergeRefs(ref, setContent, setDrag)}
        className={cn(
          'ui-v2 fixed inset-y-0 z-50 flex flex-col gap-4 overscroll-contain bg-v2-surface shadow-v2-float',
          'data-[state=open]:animate-in data-[state=open]:[animation-duration:320ms] data-[state=open]:ease-v2-drawer',
          'data-[state=closed]:animate-out data-[state=closed]:[animation-duration:220ms] data-[state=closed]:ease-v2-out',
          SIDE_CLASS[side],
          side !== 'full' && 'touch-pan-y',
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close ref={setCloser} tabIndex={-1} aria-hidden className="hidden" />
        {!hideClose && (
          <DialogPrimitive.Close
            aria-label="Close"
            className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-v2-pill hover:bg-v2-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary"
          >
            <X className="size-5" />
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});
SheetContent.displayName = 'SheetContent';

export const SheetDescription = DialogPrimitive.Description;

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
