'use client';

import React, { useEffect } from 'react';
import { DataTable } from 'src/components/table';
import { columns } from './columns';
import { types } from '../../data/data';
import useAppState from 'src/hooks/state';
import { useAppDispatch } from 'src/redux/hooks';
import { DateRangePicker } from 'src/components/ui/date-range-picker';
import { useSearchParams } from 'next/navigation';
import { Button } from 'src/components/ui/button';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { drugsData } from '../../data/drugs';
import { useSelector } from 'react-redux';
import { selectDrugs } from 'src/redux/modules/drugs/drugSelectors';
import drugActions from 'src/redux/modules/drugs/drugActions';

const Table = () => {
  const dispatch = useAppDispatch();  
  const drugs = useSelector(selectDrugs)

  useEffect(() => {
    dispatch(drugActions.getDrugs());
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
        data={drugs?.data.length > 0 ? drugs.data : drugsData}
        loading={drugs?.loading}
        columns={columns}
        sortList={sortItems}
        getSelectedRows={(selectedRows: any) => {
          setState({ selectedRows });
        }}
        actions={
          <Link href='drugs/add'>
            <Button size='sm'>
              <PlusIcon className='mr-2 size-4' aria-hidden='true' />
              New Drug
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default Table;
