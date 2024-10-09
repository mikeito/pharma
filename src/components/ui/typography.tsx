import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from 'src/lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      default: 'font-medium text-gray-900 dark:text-white',
      title: 'font-semibold text-gray-900 dark:text-white',
      'sub-title': 'font-semibold dark:text-white',
      'sub-title-primary dark:text-white': 'text-primary font-semibold uppercase tracking-[1px] dark:text-white',
      paragraph: 'font-light text-gray-900 dark:text-white',
    },
    size: {
      default: 'text-[16px]',
      sm: 'text-[15px]',
      xs: 'text-[15px]',
      base: 'text-[18px] lg:text-[26px]',
      md: 'text-[20px]',
      mid: 'text-[28px]',
      lg: 'text-[28px] lg:text-[42px]',
      xl: 'lg:text-[48px] text-[36px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface TypographyProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps & { as?: any }>(
  ({ className, variant, size, asChild = false, as = 'p', ...props }, ref) => {
    const Comp = as;
    return <Comp className={cn(typographyVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
