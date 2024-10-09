'use client';

import Link from 'next/link';
import { LoginForm } from './components/user-auth-form';

export default function Login() {
  return (
    <div className='w-full md:grid md:grid-cols-2 lg:grid-cols-3 min-h-screen'>
      <div className='flex items-center justify-center py-12  my-auto h-screen'>
        <div className='mx-auto grid lg:w-[350px] gap-6'>
          <div className='grid gap-2'>
            <h1 className='text-4xl font-bold'>Welcome Back!</h1>
            <p className='text-balance text-muted-foreground'>Enter your email below to login to your account</p>
          </div>
          <LoginForm />
          <div className='mt-4 text-center text-sm'>
            Don&apos;t have an account?{' '}
            <Link href='#' className='underline'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden bg-muted md:block lg:col-span-2 '>
        <div className='flex justify-center items-center  my-auto h-screen mx-5'>
          <img src='/assets/logo-image.svg' alt='Image' className='object-cover dark:brightness-[0.2] dark:grayscale items-center z-10 ' />
          <img
            src='/assets/circle-up.svg'
            alt='Image'
            className='absolute top-0 lg:left-[33.4%] lg:w-96 lg:h-96 md:w-52 md:h-52 md:left-[50%]'
          />
          <img src='/assets/circle-down.svg' alt='Image' className='absolute bottom-0 right-0 z-0 lg:w-96 lg:h-96 md:w-52 md:h-52' />
        </div>
      </div>
    </div>
  );
}
