'use client';

import * as React from 'react';
import * as AlertPrimitive from '@radix-ui/react-alert-dialog';

import { cn } from '@/lib/utils';
import { buttonVariants } from './button';

export const AlertDialog = AlertPrimitive.Root;
export const AlertDialogTrigger = AlertPrimitive.Trigger;

export const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertPrimitive.Portal>
    <AlertPrimitive.Overlay className="fixed inset-0 z-50 bg-v2-backdrop data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
    <AlertPrimitive.Content
      ref={ref}
      className={cn(
        'ui-v2 fixed left-1/2 top-1/2 z-50 flex w-[calc(100vw-2rem)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-v2-2xl bg-v2-surface p-8',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        className,
      )}
      {...props}
    />
  </AlertPrimitive.Portal>
));
AlertDialogContent.displayName = 'AlertDialogContent';

export const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col gap-2', className)} {...props} />
);

export const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
    {...props}
  />
);

export const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertPrimitive.Title
    ref={ref}
    className={cn('text-2xl font-[550] leading-8', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = 'AlertDialogTitle';

export const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertPrimitive.Description
    ref={ref}
    className={cn('text-sm text-v2-muted', className)}
    {...props}
  />
));
AlertDialogDescription.displayName = 'AlertDialogDescription';

export const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = 'AlertDialogAction';

export const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: 'outline' }), className)}
    {...props}
  />
));
AlertDialogCancel.displayName = 'AlertDialogCancel';
