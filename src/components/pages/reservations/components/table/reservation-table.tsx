'use client';

import React, { useEffect, useState } from 'react';
import { DataTable } from 'src/components/table';
import { columns } from './columns';
import { statuses, types } from '../../data/data';
import { transactions } from '../../data/transactions';
import { DeleteTasksDialog } from './delete-tasks-dialog';
import useAppState from 'src/hooks/state';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { DateRangePicker } from 'src/components/ui/date-range-picker';
import { useSearchParams } from 'next/navigation';
import { Button } from 'src/components/ui/button';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';
import accountAction from 'src/redux/modules/accounts/accountAction';
import { AccountState } from 'src/redux/modules/accounts/accountReducer';
import { selectAccounts } from 'src/redux/modules/accounts/accountSelector';
import {  reservationsData } from '../../data/reservations';
import { useSelector } from 'react-redux';
import { selectReservations } from 'src/redux/modules/reservations/reservationSelectors';
import reservationActions from 'src/redux/modules/reservations/reservationActions';

const ReservationTable = () => {
  const dispatch = useAppDispatch(); 
  const reservations = useSelector(selectReservations)
  console.log(reservations)

  useEffect(() => {
    dispatch(reservationActions.getReservations());
  }, []);

  const sortItems = [
    {
      title: 'type',
      options: types,
    },
  ];

  const search: any = useSearchParams();
  const [state, setState] = useAppState({});
  return (
    <div className='flex flex-col space-y-2.5'>
      <DateRangePicker triggerSize='sm' triggerClassName='ml-auto w-56 sm:w-60' align='end' />
      <DataTable
        data={reservations?.data.length > 0 ? reservations?.data : reservationsData}
        loading={reservations?.loading}
        columns={columns}
        sortList={sortItems}
        getSelectedRows={(selectedRows: any) => {
          setState({ selectedRows });
        }}
        actions={
          <Link href='reservations/add'>
            <Button size='sm'>
              <PlusIcon className='mr-2 size-4' aria-hidden='true' />
              New Reservation
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default ReservationTable;
