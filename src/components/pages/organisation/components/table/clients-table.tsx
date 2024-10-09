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

import { orgs } from 'src/app/(main)/search/data';
import { useSelector } from 'react-redux';
import { selectOrganisations } from 'src/redux/modules/organisations/organisationSelectors';
import organisationActions from 'src/redux/modules/organisations/organisationActions';

const Table = () => { 
  const dispatch = useAppDispatch();
  const organisations = useSelector(selectOrganisations)


  useEffect(() => {
    dispatch(organisationActions.getOrganizations());
  }, []);

  const sortItems = [
    {
      title: 'type',
      options: types,
    },
  ];
  console.log({organisations})

  const search: any = useSearchParams();
  const [state, setState] = useAppState({});
  return (
    <section className='flex flex-col space-y-2.5'>
      <DateRangePicker triggerSize='sm' triggerClassName='ml-auto w-56 sm:w-60' align='end' />
      <DataTable
        data={organisations?.data.length > 0 ? organisations.data : orgs}
        columns={columns}
        loading={organisations.loading}
        sortList={sortItems}
        getSelectedRows={(selectedRows: any) => {
          setState({ selectedRows });
        }}
        actions={
          <Link href='organisations/add'>
            <Button size='sm'>
              <PlusIcon className='mr-2 size-4' aria-hidden='true' />
              New Organisation
            </Button>
          </Link>
        }
      />
    </section>
  );
};

export default Table;
