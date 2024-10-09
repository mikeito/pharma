'use client';

import { useFormik } from 'formik';
import FormMessage from 'src/components/base/Input/form_message';
import { Option } from 'src/components/base/multi-selector';
import { PhoneInput } from 'src/components/base/phone-input';
import { Input as ShadInput } from 'src/components/base/Input/index';
import { Select } from 'src/components/base/select';
import { Button } from 'src/components/custom/button';
import { Input } from 'src/components/ui/input';
import { Typography } from 'src/components/ui/typography';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import serviceActions from 'src/redux/modules/services/serviceActions';
import { ServiceState } from 'src/redux/modules/services/serviceReducer';
import { selectService } from 'src/redux/modules/services/serviceSelectors';
import * as yup from 'yup';

interface PageProps {
  id: number;
}

interface FormProps {
  amount: number;
  service: string;
  customer_account: string;
}

const validationSchema = yup.object().shape({
  amount: yup.number().min(100, 'minimum of 100').required('Required field'),
  service: yup.string().required('Required field'),
  customer_account: yup.string().required('Required field'),
});

export default function ServiceForm({ id }: PageProps) {
  const dispatch = useAppDispatch();
  const service: typeof ServiceState.service = useAppSelector(selectService);

  const options: Option[] = [
    { label: 'MTN', value: 'mtn_topup' },
    { label: 'Orange', value: 'orange_topup' },
    { label: 'Nexttel', value: 'nexttel_topup' },
    { label: 'Camtel', value: 'camtel_topup' },
    { label: 'Yoomee', value: 'yoomee_topup' },
  ];

  const billOptions: Option[] = [
    { label: 'ENEO', value: 'eneo' },
    { label: 'Canal +', value: 'canalplus' },
    { label: 'CAM Water', value: 'camwater' },
  ];

  const initialValues: FormProps = {
    amount: 0,
    service: id === 3 ? 'eneo' : 'orange_topup',
    customer_account: '',
  };

  const handleSubmit = (values: FormProps) => {
    const data = {
      id,
      ...values,
    };
    dispatch(serviceActions.initService(data));
  };

  const formik = useFormik<FormProps>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const { values, errors, touched, setErrors, setFieldValue, handleBlur, handleChange, submitForm } = formik;

  return (
    <>
      <div className='py-8 flex flex-col space-y-2'>
        <div className=''>
          <Typography className='text-sm text-gray-500'>Customer Account</Typography>
          <ShadInput
            name='customer_account'
            placeholder='Customer Account'
            value={values.customer_account}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.customer_account && errors.customer_account}
          />
          {/* <PhoneInput
            name='customer_account'
            value={values.customer_account}
            onChange={(e) => setFieldValue('customer_account', e)}
            error={touched.customer_account && errors.customer_account}
          /> */}
        </div>
        <div className=''>
          <Typography className='text-sm text-gray-500'>Enter amount to transfer</Typography>
          <div className='flex gap-x-2 items-end max-w-full pt-2'>
            <Input
              name='amount'
              value={values.amount}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`border-none text-2xl font-semibold focus-visible:ring-0 ${values.amount > 9000000 ? 'w-[70%]' : values.amount > 9000 ? 'w-[50%]' : 'w-[30%]'} `}
              placeholder='0,00'
            />
            <Typography className={`text-lg font-semibold ${!values.amount && 'text-gray-400'} `}>CFA</Typography>
          </div>
          {errors.amount && <FormMessage>{errors.amount}</FormMessage>}
        </div>
      </div>
      {/* <div className=''>
        <Typography className='text-sm text-gray-500 pb-1'>
          {id === 3 ? 'Select Service to be payed' : 'Select your preferred payout method'}
        </Typography>
        <Select
          name='service'
          placeholder='Select the service to be used'
          options={id === 3 ? billOptions : options}
          defaultValue={values.service}
          onValueChange={(e: any) => setFieldValue('service', e)}
        />
        {errors.service && <FormMessage>{errors.service}</FormMessage>}
      </div> */}
      <Button className='mt-4 w-full' onClick={submitForm} loading={service.loading}>
        Proceed
      </Button>
    </>
  );
}
