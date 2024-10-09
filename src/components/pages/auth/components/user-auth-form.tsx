'use client';

import { HTMLAttributes } from 'react';
import { Button } from 'src/components/custom/button';
import { cn } from 'src/lib/utils';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Input } from 'src/components/base/Input';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { selectUser } from 'src/redux/modules/auth/authSelectors';
import authActions from 'src/redux/modules/auth/authActions';
import { UserState } from 'src/redux/modules/auth/authReducer';
import { Alert, AlertDescription, AlertTitle } from 'src/components/ui/alert';

interface LoginFormProps extends HTMLAttributes<HTMLDivElement> {}

interface FormProps {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup.string().email().required('Required field'),
  password: yup.string().min(4, 'Password must be at least 7 characters long').required('Required field'),
});

export function LoginForm({ className, ...props }: LoginFormProps) {
  const dispatch = useAppDispatch();

  const initialValues: FormProps = {
    email: '',
    password: '',
  };

  const handleSubmit = (data: FormProps) => {
    console.log(data)
  };

  const formik = useFormik<FormProps>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const { submitForm, values, errors, touched, handleBlur, handleChange } = formik;

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      {/* {user.error && (
            <Alert variant="destructive" className="bg-red-50">
              <AlertTitle>Incorrect credentials</AlertTitle>
              <AlertDescription>
                Please enter your correct credentials to login
              </AlertDescription>
            </Alert>
          )} */}
      <div className='grid gap-4'>
        <Input
          id='email'
          name='email'
          label='Email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          placeholder='mosa@iwomi.com'
        />
        <Input
          id='password'
          type='password'
          name='password'
          label='Password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
          placeholder='****'
          rightLabel={
            <div className='flex items-center'>
              <Link href='/forgot-password' className='ml-auto inline-block text-sm underline'>
                Forgot your password?
              </Link>
            </div>
          }
        />
        <Button
          type='submit'
          className='w-full'
          //   loading={user.loading}
          onClick={submitForm}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
