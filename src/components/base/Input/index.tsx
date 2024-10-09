import React, { InputHTMLAttributes } from 'react';
import { Input as ShadInput } from 'src/components/ui/input';
import FormMessage from './form_message';
import FormDescription from './form_description';
import FormLabel from './form_label';
import { PasswordInput } from '../../ui/password';
import { PhoneInput } from '../../ui/phone-input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  description?: string;
  label?: string;
  error?: any;
  rightLabel?: any;
}

interface Components {
  password: JSX.Element;
  phoneNumber: JSX.Element;
  default: JSX.Element;
}

export function Input({ description, name, label, error, type = 'text', rightLabel, ...props }: InputProps) {
  const components: Components = {
    password: (
      <PasswordInput
        name={name}
        className={` ${error && 'text-destructive border-destructive focus-visible:ring-destructive'}`}
        {...props}
      />
    ),
    phoneNumber: (
      <PhoneInput defaultCountry='CM' className={` ${error && 'text-destructive border-destructive focus-visible:ring-destructive'}`} />
    ),
    default: (
      <ShadInput
        name={name}
        {...props}
        className={`${error && 'text-destructive border-destructive focus-visible:ring-destructive'}  ${props.className} `}
      />
    ),
  };

  const selectedComponent = components[type as keyof Components] || components.default;

  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <div className='flex justify-between items-center'>
        <FormLabel id={name} error={Boolean(error)}>
          {label}
        </FormLabel>
        {rightLabel}
      </div>
      {selectedComponent}

      <FormDescription>{description}</FormDescription>
      {error && <FormMessage>{error}</FormMessage>}
    </div>
  );
}
