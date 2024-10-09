'use client';

import React from 'react';
import { Tabs as ShadTabs, TabsContent, TabsList, TabsTrigger } from 'src/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'src/components/ui/card';
import AllTransactions from './all-transactions';
import { ReceiptText, Repeat2 } from 'lucide-react';
import { ServiceDialogLayout } from './service-dialog-layout';
import { Label } from 'src/components/ui/label';
import { RadioGroup, RadioGroupItem } from 'src/components/ui/radio-group';
import { IconBrandApple, IconBrandPaypal } from '@tabler/icons-react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Typography } from 'src/components/ui/typography';

interface ServiceProps {
  id: number;
  title: string;
  image: string;
  triggerTitle: string;
  triggerIcon?: any;
}

const Tabs = () => {
  const dialog: ServiceProps[] = [
    {
      id: 1,
      title: 'MTN',
      image: '/assets/noun-money-transfer-6671330.svg',
      triggerTitle: 'MTN',
      triggerIcon: '/assets/mtn.png',
    },
    {
      id: 1,
      title: 'Orange',
      image: '/assets/noun-money-transfer-6671330.svg',
      triggerIcon: '/assets/orange.png',
      triggerTitle: 'Orange',
    },
    // {
    //   id: 1,
    //   title: 'Camtel',
    //   image: '/assets/noun-money-transfer-6671330.svg',
    //   triggerTitle: 'Camtel',
    // },
    // {
    //   id: 2,
    //   title: 'Buy Airtime Bundle',
    //   image: '/assets/noun-mobile-banking-5713789.svg',
    //   triggerIcon: <ReceiptText />,
    //   triggerTitle: 'Airtime Bundle',
    // },
    // {
    //   id: 3,
    //   title: 'Bill Payment',
    //   image: '/assets/noun-bill-payment-2266390.svg',
    //   triggerIcon: <ReceiptText />,
    //   triggerTitle: 'Bill Payment',
    // },
  ];

  const mosaOptions = [
    {
      id: 1,
      title: 'MTN',
      image: '/assets/noun-money-transfer-6671330.svg',
      triggerTitle: 'MTN',
      triggerIcon: '/assets/mtn.png',
    },
  ];
  const services = [
    {
      title: 'Mobile Transfers',
      imageUrl: '/assets/mobile-transfer.png',
      value: 'mobile-transfers',
    },
    {
      title: 'Airtime',
      imageUrl: '/assets/airtime.svg',
      value: 'airtime',
    },
    {
      title: 'Bill Payment',
      imageUrl: '/assets/bill.png',
      value: 'bill-payment',
    },
  ];

  const mobileTransferService = [
    {
      title: 'Mosa',
      imageUrl: '/assets/mosa.png',
      value: 'mosa',
    },
    {
      title: 'MOMO',
      imageUrl: '/assets/momo.png',
      value: 'momo',
    },
    {
      title: 'Bank',
      imageUrl: '/assets/bank.png',
      value: 'bank',
    },
    {
      title: 'Micro Finance',
      imageUrl: '/assets/micro-finance.png',
      value: 'micro-finance',
    },
    {
      title: 'Money Transfer Agencies',
      imageUrl: '/assets/transfer.png',
      value: 'money-transfer',
    },
    {
      title: 'Other Financial Institution',
      imageUrl: '/assets/accounting.png',
      value: 'other-institute',
    },
  ];
  const airtime = [
    {
      title: 'Mosa',
      imageUrl: '/assets/mosa.png',
      value: 'mosa',
    },
    {
      title: 'MOMO',
      imageUrl: '/assets/momo.png',
      value: 'momo',
    },
  ];

  const bills = [
    {
      title: 'Eneo',
      imageUrl: '/assets/mosa.png',
      value: 'eneo',
    },
    {
      title: 'CamWater',
      imageUrl: '/assets/momo.png',
      value: 'camWater',
    },
    {
      title: 'Canal +',
      imageUrl: '/assets/momo.png',
      value: 'canal',
    },
  ];

  const subOptions: any = {
    'mobile-transfers': mobileTransferService,
    airtime: airtime,
    'bill-payment': bills,
  };

  const trigger: any = {
    momo: dialog,
    mosa: mosaOptions,
  };

  const initialValues = {
    parent: services[0].value,
    child: mobileTransferService[0].value,
  };

  const validationSchema = yup.object({});

  const handleSubmit = (values: any) => {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const { handleChange, setFieldValue, values } = formik;

  return (
    <>
      <div className='flex space-x-3 pb-8 border-b '>
        <RadioGroup onValueChange={(e) => setFieldValue('parent', e)} defaultValue={values.parent} className='grid grid-cols-3 gap-4'>
          {services.map((service) => (
            <div key={service.value}>
              <RadioGroupItem value={service.value} id={service.value} className='peer sr-only ' />
              <Label
                htmlFor={service.value}
                className='flex flex-col items-center hover:cursor-pointer justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
              >
                <img src={service.imageUrl} className='mb-3 size-10' />
                {service.title}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className=''>
        <Typography className='mb-3'>Avialable Services</Typography>
        {values.parent && (
          <RadioGroup onValueChange={(e) => setFieldValue('child', e)} defaultValue={values.child} className='grid grid-cols-6 gap-4'>
            {subOptions[values.parent].map((service: any) => (
              <div>
                <RadioGroupItem key={service.value} value={service.value} id={service.value} className='peer sr-only' />
                <Label
                  htmlFor={service.value}
                  className='flex flex-col items-center text-center truncate hover:cursor-pointer justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
                >
                  <img src={service.imageUrl} className='mb-3 size-10' />
                  {service.title}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      </div>
      <div className=''>
        <div className='flex gap-4 mt-10'>
          {trigger[values.child].map((service: any, key: number) => (
            <ServiceDialogLayout
              key={key}
              id={service.id}
              image={service.image}
              title={service.title}
              triggerIcon={service.triggerIcon}
              triggerTitle={service.triggerTitle}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tabs;
