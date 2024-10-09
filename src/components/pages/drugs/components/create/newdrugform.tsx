'use client';

import React, { HTMLAttributes, useEffect, useState } from 'react';
import { Button } from 'src/components/custom/button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Input } from 'src/components/base/Input';
import { Select } from 'src/components/base/select';
import accountAction from 'src/redux/modules/accounts/accountAction';
import { useDispatch, useSelector } from 'react-redux';
import { Loader2 } from 'lucide-react';
import clientActions from 'src/redux/modules/clients/clientActions';
import { selectUser } from 'src/redux/modules/auth/authSelectors';
import organisationActions from 'src/redux/modules/organisations/organisationActions';
import { selectOrganisations } from 'src/redux/modules/organisations/organisationSelectors';
import drugActions from 'src/redux/modules/drugs/drugActions';


interface NewAccountFormProps extends HTMLAttributes<HTMLDivElement> {}

const validationSchema = yup.object().shape({
  name: yup.string().required('name is required'),
  description: yup.string().required('description is required').required('UserName is required'),
  quantity: yup.string().required('quantity is required'),
  price: yup.string().required('price is required'),
  organisationId: yup.string().required('price is required'),
  userId: yup.string().required('price is required'),
});

interface FormProps {
  name: string;
  description: string;
  quantity: string;
  price: string;
  organisationId:string;
  userId:string
}

export function NewAccountForm({ className, ...props }: NewAccountFormProps) {
  
  const user = useSelector(selectUser)

  const initialValues: FormProps = {
    name: '',
    description: '',
    quantity: '',
    price: '',
    organisationId:"12345",
    userId:user?.id || '12345'
  };
  const dispatch = useDispatch();
  const [OrgIds, setOrgIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const organisations = useSelector(selectOrganisations)


 
  useEffect(() => {
    const fetchOrganisations = async () => {
      setIsLoading(true);
      try {
        const response =await dispatch(organisationActions.getOrganizations() as any);
        setOrgIds(response?.payload?.map((org:any) => org.id) as any);
      } catch (error) {
        console.error('Error fetching organisations:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrganisations();
  }, [dispatch]);

  const handleSubmit = async (data: FormProps) => {
    setIsSubmitting(true);
    console.log(data)
    dispatch(drugActions.createDrug(data) as any).finally(() => {
      setIsSubmitting(false);
    });
  };
  const formik = useFormik<FormProps>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const { submitForm, values, errors, touched, handleBlur, handleChange, setFieldValue } = formik;
  const orgOptions = React.useMemo(() => {
    if (OrgIds?.length > 0 ){
      return OrgIds?.map((clientId) => ({ value: clientId, label: clientId }));
    }
  }, [OrgIds]);
  const orgs =[
    {
      label:"Org 1",
      value:"org1"
    },
    {
      label:"Org 2",
      value:"org2"
    },
  ]
  return (
    <div className={className} {...props}>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
      <Select
          name='organisationId'
          label='Organisation'
          placeholder='Select Organisation'
          options={orgOptions && orgOptions.length > 0 ? orgOptions :orgs }
          defaultValue={values.organisationId}
          onValueChange={(e: any) => setFieldValue('organisationId', e)}
        />
        <Input
          id='name'
          name='name'
          label='Name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
          placeholder='Name'
        />
        <Input
          id='description'
          name='description'
          label='Description'
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.description && errors.description}
          placeholder='Description'
        />

        <Input
          id='quantity'
          name='quantity'
          label='Quantity'
          value={values.quantity}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.quantity && errors.quantity}
          placeholder='Quantity'
        />
        
        <Input
          id='price'
          name='price'
          label='Price'
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.price && errors.price}
          placeholder='Price'
        />
      </div>{' '}
      <Button disabled={isSubmitting} type='submit' className='w-full sm:w-auto mt-4 text-white py-2 px-4 rounded' onClick={submitForm}>
        {isSubmitting ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null} {/* Render loader conditionally */}
        Create Drug
      </Button>
    </div>
  );
}
