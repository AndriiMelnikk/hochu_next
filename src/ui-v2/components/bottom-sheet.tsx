'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

export const BottomSheet = DialogPrimitive.Root;
export const BottomSheetTrigger = DialogPrimitive.Trigger;
export const BottomSheetClose = DialogPrimitive.Close;

/**
 * Нижня шторка для мобільного (фільтри, меню акаунта, вибір): виїжджає знизу,
 * скруглені верхні кути, внутрішній скрол, safe-area знизу. Структура:
 * `BottomSheetHeader` → `BottomSheetBody` → `BottomSheetFooter`.
 */
export const BottomSheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { hideClose?: boolean }
>(({ className, children, hideClose, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-v2-backdrop data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'ui-v2 fixed inset-x-0 bottom-0 z-50 flex max-h-[90dvh] flex-col rounded-t-v2-2xl bg-v2-surface shadow-v2-float outline-none',
        'data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom',
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className="mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-v2-border-strong"
      />
      {children}
      {!hideClose && (
        <DialogPrimitive.Close
          aria-label="Close"
          className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-v2-pill hover:bg-v2-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary"
        >
          <X className="size-6" />
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
BottomSheetContent.displayName = 'BottomSheetContent';

export const BottomSheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex shrink-0 flex-col gap-1 px-4 pb-3 pr-14 pt-3', className)} {...props} />
);

export const BottomSheetTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn('text-2xl font-[450]', className)} {...props} />
));
BottomSheetTitle.displayName = 'BottomSheetTitle';

export const BottomSheetDescription = DialogPrimitive.Description;

export const BottomSheetBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('min-h-0 flex-1 overflow-y-auto px-4 py-2', className)} {...props} />
);

/** Нижні дії (Очистити / Застосувати) — завжди видимі, з відступом під «чубчик» iOS. */
export const BottomSheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex shrink-0 items-center justify-between gap-3 border-t border-v2-border px-4 pt-3',
      'pb-[max(1rem,env(safe-area-inset-bottom))]',
      className,
    )}
    {...props}
  />
);
