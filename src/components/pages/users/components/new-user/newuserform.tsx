'use client';

import React, { useState } from 'react';
import { HTMLAttributes } from 'react';
import { Button } from 'src/components/custom/button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Input } from 'src/components/base/Input';
import { Select } from 'src/components/base/select';
import { Loader2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import userAction from 'src/redux/modules/users/userAction';

interface NewUserFormProps extends HTMLAttributes<HTMLDivElement> {}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  passwordHash: yup.string().required('Password is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  role: yup.string().required('Role is required'),
});

interface FormProps {
  username: string;
  email: string;
  passwordHash: string;
  phoneNumber: string;
  role: string;
}

export function NewUserForm({ className, ...props }: NewUserFormProps) {
  
  const initialValues: FormProps = {
    username: '',
    email: '',
    passwordHash: '0000',
    phoneNumber: '',
    role: '',
  };
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: FormProps) => {
    setIsSubmitting(true);
    console.log(data)
    dispatch(userAction.createUser(data) as any).finally(() => {
      setIsSubmitting(false);
    });
    setIsSubmitting(false);
  };
  const formik = useFormik<FormProps>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const { submitForm, values, errors, touched, handleBlur, handleChange, setFieldValue } = formik;

  return (
    <div className={className} {...props}>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
     
        <Input
          id='username'
          name='username'
          label='Username'
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && errors.username}
          placeholder='Username'
        />
        <Input
          id='email'
          name='email'
          label='Email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          placeholder='Email address'
        />
        <Input
          id='phoneNumber'
          name='phoneNumber'
          label='Telephone Number'
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phoneNumber && errors.phoneNumber}
          placeholder='Telephone number'
        />
        <Input
          id='passwordHash'
          name='passwordHash'
          label='Password'
          value={values.passwordHash}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.passwordHash && errors.passwordHash}
          placeholder='Password'
        />
         <Select
          name='role'
          label='role'
          placeholder='Select role'
          options={[
            { value: "USER", label: "USER" },
              { value: "PHARMACIST", label: "PHARMACIST" },
          ]}
          defaultValue={values.role}
          onValueChange={(e: any) => setFieldValue('role', e)}
        />
      </div>{' '}
      <Button disabled={isSubmitting} type='submit' className='w-full sm:w-auto mt-4 text-white py-2 px-4 rounded' onClick={submitForm}>
        {isSubmitting ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null} {/* Render loader conditionally */}
        Create User
      </Button>
    </div>
  );
}