import React, { InputHTMLAttributes } from 'react';
import FormLabel from './Input/form_label';
import FormDescription from './Input/form_description';
import FormMessage from './Input/form_message';
import { Select as ShadSelect, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type Option = {
  label: string;
  value: string;
};

interface SelectProps {
  name: string;
  placeholder: string;
  type?: string;
  description?: string;
  label?: string;
  error?: any;
  options?: Option[];
  defaultValue?: string;
  onValueChange?: any;
}

export function Select({ description, name, label, error, placeholder, options, ...props }: SelectProps) {
  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <div className='flex justify-between items-center'>
        <FormLabel id={name} error={Boolean(error)}>
          {label}
        </FormLabel>
      </div>
      <ShadSelect {...props}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option, key) => (
            <SelectItem key={key} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </ShadSelect>
      <FormDescription>{description}</FormDescription>
      {error && <FormMessage>{error}</FormMessage>}
    </div>
  );
}
