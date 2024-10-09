'use client';

import React, { HTMLAttributes, useEffect, useState } from 'react';
import { Button } from 'src/components/custom/button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Input } from 'src/components/base/Input';
import { useDispatch } from 'react-redux';
import { Loader2 } from 'lucide-react';
import drugActions from 'src/redux/modules/drugs/drugActions';
import MultipleSelector from 'src/components/ui/multi-selector';

interface NewReservationFormProps extends HTMLAttributes<HTMLDivElement> {}

const validationSchema = yup.object().shape({
  quantity: yup.string().required('quantity is required'),
  price: yup.string().required('price is required'),
  drugs: yup.array().required('price is required'),
  date: yup.string().required('date is required'),
});

interface FormProps {
  quantity: string;
  drugs: string[];
  price: string;
  date: string;
}

export function NewReservationForm({ className, ...props }: NewReservationFormProps) {
  const initialValues: FormProps = {
    drugs: [''],
    quantity: '',
    price: '',
    date: '',
  };
  const dispatch = useDispatch();
  const [drugsIds, setClientIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchDrugs = async () => {
      setIsLoading(true);
      try {
        const response = await dispatch(drugActions.getDrugs() as any);
        setClientIds(response.payload.map((drug:any) => drug.id));
      } catch (error) {
        console.error('Error fetching drugs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDrugs();
  }, [dispatch]);

  const handleSubmit = async (data: FormProps) => {
    console.log(data)
    setIsSubmitting(true);
    // dispatch(reservationActions.createReservation(data) as any).finally(() => {
    //   setIsSubmitting(false);
    // });
    setIsSubmitting(false);
  };
  const formik = useFormik<FormProps>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const { submitForm, values, errors, touched, handleBlur, handleChange, setFieldValue } = formik;
  const drugOptions = React.useMemo(() => {
    if(drugsIds?.length > 0){
      return drugsIds?.map((drugId) => ({ value: drugId, label: drugId }));
    }
  }, [drugsIds]);
  const drugOptions2 = [
    { value: "Paracetamol", label: "Paracetamol" },
      { value: "Latinix", label: "Latinix" },
      { value: "Amocciciline", label: "Amocciciline" },
  ]
  return (
    <div className={className} {...props}>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 place-content-center'>
     
        <MultipleSelector
          placeholder='Select drug(s)'
          options={drugOptions && drugOptions.length > 0 ? drugOptions : drugOptions2}
          onChange={(e:any) => setFieldValue('drugs', e)}  
          className='mt-5'      
        />
        <Input
          id='quantity'
          name='quantity'
          label='quantity'
          value={values.quantity}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.quantity && errors.quantity}
          placeholder='Quantity'
        />
        <Input
          id='price'
          name='price'
          label='price'
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.price && errors.price}
          placeholder='Price'
        />
        <Input
          name='date'
          label='date'
          type='date'
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.date && errors.date}
          placeholder='Date to be deivered'
        />
        

      </div>{' '}
      <Button disabled={isSubmitting} type='submit' className='w-full sm:w-auto mt-4 text-white py-2 px-4 rounded' onClick={submitForm}>
        {isSubmitting ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null} 
        Make a reservation
      </Button>
    </div>
  );
}
