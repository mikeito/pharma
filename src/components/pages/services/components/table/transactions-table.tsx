'use client';

import React, { useEffect } from 'react';
import { DataTable } from 'src/components/table';
import { columns } from './columns';
import { statuses, types } from '../../data/data';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { selectService } from 'src/redux/modules/services/serviceSelectors';
import serviceActions from 'src/redux/modules/services/serviceActions';
import transactionActions from 'src/redux/modules/transactions/transactionActions';
import { TransactionState } from 'src/redux/modules/transactions/transactionReducer';
import { selectTransaction } from 'src/redux/modules/transactions/transactionSelectors';

const Table = () => {
  const transactions: typeof TransactionState.transactions = useAppSelector(selectTransaction);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(transactionActions.getTransactions());
  }, []);

  const sortItems = [
    {
      title: 'status',
      options: statuses,
    },
    {
      title: 'type',
      options: types,
    },
  ];

  return <DataTable data={transactions.data} columns={columns} loading={transactions.loading} />;
};

export default Table;
