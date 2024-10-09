'use client';
import apiClient from 'src/api/route';
import { setLocalUser } from 'src/helpers/auth';
import createApiRequestAction from 'src/redux/createApiRequestAction';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface serviceProps {
  amount: number;
  service: string;
  customer_account: string;
  id: number;
}

interface TransactionConfig {
  body: any;
  url: string;
}

const initService: any = createAsyncThunk('service/init', async (data: serviceProps) => {
  const { id, ...values } = data;

  const configMap: { [id: number]: TransactionConfig } = {
    1: {
      body: {
        ...values,
        issuer_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        receiver_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        sense: 'CREDIT',
        issuer_account: 'CLIENTAC1234',
        receiver_account: 'USER1AC000',
      },
      url: '/transactions/mobile-transfer',
    },
    2: {
      body: {
        ...values,
        tel: values.customer_account,
        eternal_id: '',
        issuer_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        receiver_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        sense: 'CREDIT',
        issuer_account: 'CLIENTAC1234',
        receiver_account: 'USER1AC000',
      },
      url: '/transactions/airtime-transfer',
    },
    3: {
      body: {
        amount: values.amount, //
        issuer_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        receiver_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        sense: 'CREDIT',
        issuer_account: 'CLIENTAC1234',
        receiver_account: 'USER1AC000',
        customer_account: '678769279',
        service: 'mtn_topup', //
        payItemId: 'Eneo bill', //
        external_id: '678769279',
        tel: '678769279',
        email: 'eneo@gmail.com', //
        name: 'eneo', //
        service_number: 'eneo12', //
      },
      url: '/transactions/bill-transfer',
    },
  };

  const { body, url } = configMap[id];
  const response = await apiClient(url, 'POST', body);
  return response;
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  initService,
};
