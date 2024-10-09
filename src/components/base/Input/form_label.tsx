import { cn } from 'src/lib/utils';
import { Label } from '../../ui/label';
import { ForwardedRef, ReactNode } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

interface Props {
  className?: string;
  error?: boolean;
  id?: string;
  children: ReactNode;
}

const FormLabel = ({ className, children, id, error, ...props }: Props) => {
  return (
    <Label className={cn(error && 'text-destructive', className)} htmlFor={id} {...props}>
      {children}
    </Label>
  );
};

export default FormLabel;
