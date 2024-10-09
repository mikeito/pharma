import * as yup from 'yup';

const ServiceSchema = yup.object().shape({
  id: yup.number().required(),
  type: yup.string().required(),
  amount: yup.number().required(),
  status: yup.string().required(),
  date: yup.string().required(),
  description: yup.string().required(),
  location: yup.string(),
  service_provider: yup.string(),
  service_receiver: yup.string(),
  bill_recipient: yup.string(),
});

export default ServiceSchema;
