import React, { ForwardedRef, ReactNode } from 'react';
import { cn } from 'src/lib/utils';

interface Props {
  ref?: ForwardedRef<HTMLParagraphElement>;
  className?: string;
  children: ReactNode;
}
const FormDescription = ({ className, ref, children, ...props }: Props) => {
  return (
    <p ref={ref} id={children?.toString()} className={cn('text-sm text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
};

export default FormDescription;
