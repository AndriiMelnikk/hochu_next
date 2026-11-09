'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ArrowLeft, X } from 'lucide-react';

import { cn } from '@/lib/utils';

export const Modal = DialogPrimitive.Root;
export const ModalTrigger = DialogPrimitive.Trigger;
export const ModalClose = DialogPrimitive.Close;

const Overlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-v2-backdrop',
      'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
      className,
    )}
    {...props}
  />
));
Overlay.displayName = 'ModalOverlay';

/** Центрована модалка: ширина 750px, radius 24px. */
export const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { hideClose?: boolean }
>(({ className, children, hideClose, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <Overlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'ui-v2 fixed left-1/2 top-1/2 z-50 flex max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] max-w-[750px]',
        '-translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-v2-2xl bg-v2-surface',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'focus-visible:outline-none',
        className,
      )}
      {...props}
    >
      {children}
      {!hideClose && (
        <DialogPrimitive.Close
          aria-label="Close"
          className="absolute right-0 top-0 flex size-14 items-center justify-center rounded-v2-pill text-v2-ink transition-colors hover:text-v2-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary"
        >
          <X className="size-6" />
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
ModalContent.displayName = 'ModalContent';

export function ModalHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-1 px-6 pb-0 pt-8 pr-16', className)} {...props} />;
}

export const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-2xl font-[550] leading-8 text-v2-ink', className)}
    {...props}
  />
));
ModalTitle.displayName = 'ModalTitle';

export const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-v2-muted', className)}
    {...props}
  />
));
ModalDescription.displayName = 'ModalDescription';

export function ModalBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex-1 overflow-y-auto px-6 py-4', className)} {...props} />;
}

export function ModalFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-2 border-t border-v2-border px-6 py-8',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Drawer: панель справа на всю висоту (Job details), ширина до 1020px.
 * Шапка 64px: "назад" зліва, дії справа. Футер з основними діями фіксований внизу.
 */
export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <Overlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'ui-v2 fixed inset-y-0 right-0 z-50 flex w-full max-w-[1020px] flex-col bg-v2-surface',
        'data-[state=open]:animate-in data-[state=open]:slide-in-from-right',
        'data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right',
        'focus-visible:outline-none',
        className,
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
DrawerContent.displayName = 'DrawerContent';

export function DrawerHeader({
  className,
  children,
  backLabel = 'Go back',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { backLabel?: string }) {
  return (
    <div
      className={cn(
        'flex h-16 shrink-0 items-center justify-between border-b border-v2-border px-6',
        className,
      )}
      {...props}
    >
      <DialogPrimitive.Close
        aria-label={backLabel}
        className="flex size-10 items-center justify-center rounded-v2-pill text-v2-primary transition-colors hover:bg-v2-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary"
      >
        <ArrowLeft className="size-5" />
      </DialogPrimitive.Close>
      {children}
    </div>
  );
}

export const DrawerTitle = ModalTitle;
export const DrawerDescription = ModalDescription;
export const DrawerBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex-1 overflow-y-auto px-6 py-6', className)} {...props} />
);
export const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex shrink-0 flex-col gap-3 border-t border-v2-border p-4', className)}
    {...props}
  />
);
