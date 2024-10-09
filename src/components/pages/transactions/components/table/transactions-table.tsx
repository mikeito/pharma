'use client';

import React, { useState } from 'react';
import { DataTable } from 'src/components/table';
import { columns } from './columns';
import { statuses, types } from '../../data/data';
import { transactions } from '../../data/transactions';
import useAppState from 'src/hooks/state';
import { DateRangePicker } from 'src/components/ui/date-range-picker';
import { useSearchParams } from 'next/navigation';

const Table = () => {
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

  const search: any = useSearchParams();

  const [value, setValue] = useAppState();
  return (
    <div className='flex flex-col space-y-2.5'>
      <DateRangePicker triggerSize='sm' triggerClassName='ml-auto w-56 sm:w-60' align='end' />
      <DataTable
        data={transactions}
        columns={columns}
        sortList={sortItems}
        getSelectedRows={(selectedRows: any) => {
          setValue({ selectedRows });
        }}
      />
      ;
    </div>
  );
};

export default Table;
