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
import userAction from 'src/redux/modules/users/userAction';
import { UserState } from 'src/redux/modules/users/userReducer';
import { selectUsers } from 'src/redux/modules/users/userSelector';

const Table = () => {
  const users: typeof UserState.users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userAction.getUsers());
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

  const search: any = useSearchParams();
  const [state, setState] = useAppState({});
  return (
    <div className='flex flex-col space-y-2.5'>
      <DateRangePicker triggerSize='sm' triggerClassName='ml-auto w-56 sm:w-60' align='end' />
      <DataTable
        data={users.data === undefined ? [] : users.data}
        columns={columns}
        loading={users.loading}
        sortList={sortItems}
        getSelectedRows={(selectedRows: any) => {
          setState({ selectedRows });
        }}
        actions={
          <Link href='users/new-user'>
            <Button size='sm'>
              <PlusIcon className='mr-2 size-4' aria-hidden='true' />
              New User
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default Table;
