import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-v2-pill',
    'text-sm font-semibold transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:bg-v2-disabled-bg disabled:text-v2-disabled-text disabled:border-transparent',
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        primary:
          'border border-transparent bg-v2-primary text-v2-on-primary hover:bg-v2-primary-hover',
        secondary: 'border border-v2-primary bg-v2-surface text-v2-primary hover:bg-v2-hover',
        /** Нейтральний контур (Back, View all): темна тонка рамка */
        outline: 'border border-v2-border-strong bg-v2-surface text-v2-ink hover:bg-v2-hover',
        danger: 'border border-transparent bg-v2-danger text-white hover:opacity-90',
        ghost: 'border border-transparent bg-transparent text-v2-ink hover:bg-v2-hover',
        link: 'border-0 bg-transparent text-v2-primary hover:underline underline-offset-4',
      },
      size: {
        sm: 'h-8 px-4',
        md: 'h-10 px-4',
      },
      shape: {
        pill: '',
        circle: 'px-0',
      },
    },
    compoundVariants: [
      { shape: 'circle', size: 'sm', className: 'w-8' },
      { shape: 'circle', size: 'md', className: 'w-10' },
    ],
    defaultVariants: { variant: 'primary', size: 'md', shape: 'pill' },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, type, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : (type ?? 'button')}
        className={cn(buttonVariants({ variant, size, shape }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

/** Кругла кнопка-іконка (серце, олівець, "+"). Обов'язковий aria-label. */
export const IconButton = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, 'shape'> & { 'aria-label': string }
>(({ variant = 'ghost', ...props }, ref) => (
  <Button ref={ref} variant={variant} shape="circle" {...props} />
));
IconButton.displayName = 'IconButton';
