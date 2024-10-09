'use client';

import { useFormik } from 'formik';
import { useEffect } from 'react';
import FormMessage from 'src/components/base/Input/form_message';
import { Option } from 'src/components/base/multi-selector';
import { Select } from 'src/components/base/select';
import { Button } from 'src/components/custom/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from 'src/components/ui/dialog';
import { Input } from 'src/components/ui/input';
import { Input as PhoneInput } from 'src/components/base/Input/index';
import { Typography } from 'src/components/ui/typography';
import * as yup from 'yup';

interface FormProps {
  amount: number;
  service: string;
}

const validationSchema = yup.object().shape({
  amount: yup.number().min(100, 'minimum of 100').required('Required field'),
  service: yup.string().required('Required field'),
});

export function DialogDemo() {
  const options: Option[] = [
    { label: 'MTN', value: 'mtn_topup' },
    { label: 'Orange', value: 'orange_topup' },
    { label: 'Nexttel', value: 'nexttel_topup' },
    { label: 'Camtel', value: 'camtel_topup' },
    { label: 'Yoomee', value: 'yoomee_topup' },
  ];

  const initialValues: FormProps = {
    amount: 0,
    service: 'orange_topup',
  };

  const handleSubmit = (values: FormProps) => {};

  const formik = useFormik<FormProps>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const { values, errors, setErrors, setFieldValue, handleBlur, handleChange, submitForm } = formik;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className='max-w-[620px]'>
        <div className='flex gap-x-8'>
          <img src='/assets/noun-money-transfer-6671330.svg' className='md:w-60 md:h-80' />
          <div className='pt-7'>
            <Typography variant='title' className='text-2xl'>
              Transfer Money
            </Typography>
            <div className='py-8'>
              {/* <PhoneInput name="customer_account" type='phoneNumber'/> */}
              <Typography className='text-sm text-gray-500'>Enter amount to transfer</Typography>
              <div className='flex gap-x-2 items-end max-w-full pt-4'>
                <Input
                  name='amount'
                  value={values.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`border-none text-3xl font-semibold focus-visible:ring-0 ${values.amount > 1000000 ? 'w-[70%]' : values.amount > 1000 ? 'w-[50%]' : 'w-[30%]'} `}
                  placeholder='0,00'
                />
                <Typography className={`text-lg font-semibold ${!values.amount && 'text-gray-400'} `}>CFA</Typography>
              </div>
              {errors.amount && <FormMessage>{errors.amount}</FormMessage>}
            </div>
            <Typography className='text-sm text-gray-500 pb-1'>Select your preferred payout method</Typography>
            <Select
              name='service'
              placeholder='Select the service to be used'
              options={options}
              defaultValue={values.service}
              onValueChange={(e: any) => setFieldValue('service', e)}
            />
            {errors.service && <FormMessage>{errors.service}</FormMessage>}
            <Button className='mt-4 w-full' onClick={submitForm}>
              Proceed
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
