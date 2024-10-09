import React from 'react';

import { PhoneInput as PhoneNumber, PhoneInputProps } from '../ui/phone-input';
import FormDescription from './Input/form_description';
import FormMessage from './Input/form_message';
import FormLabel from './Input/form_label';

interface InputProps extends PhoneInputProps {
  name: string;
  description?: string;
  label?: string;
  error?: any;
}

export function PhoneInput({ description, name, label, error, ...props }: InputProps) {
  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <FormLabel id={name} error={Boolean(error)}>
        {label}
      </FormLabel>
      <PhoneNumber
        defaultCountry='CM'
        className={` ${error && 'text-destructive border-destructive focus-visible:ring-destructive'}`}
        {...props}
      />
      <FormDescription>{description}</FormDescription>
      {error && <FormMessage>{error}</FormMessage>}
    </div>
  );
}
