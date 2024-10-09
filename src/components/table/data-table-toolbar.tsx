'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';

import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';
import { DataTableViewOptions } from './data-table-view-options';

import { DataTableFacetedFilter } from './data-table-faceted-filter';
import capitalizeFirstLetter from 'src/helpers/capitalize';
import { sortListType } from 'src/types';
import { ReactNode, useEffect, useState } from 'react';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  sortList?: sortListType[];
  globalFilter: string;
  children: ReactNode;
  setGlobalFilter: any;
}

function DebouncedInput({ value: initialValue, onChange, debounce = 500 }: any) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Filter items...' className='h-8 w-[150px] lg:w-[250px]' />
  );
}

export function DataTableToolbar<TData>({ table, sortList, globalFilter, setGlobalFilter, children }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2'>
        <DebouncedInput value={globalFilter ?? ''} onChange={(value: any) => setGlobalFilter(String(value))} />
        <div className='flex gap-x-2'>
          {sortList?.map(
            (item, index) =>
              table.getColumn(item.title) && (
                <DataTableFacetedFilter
                  key={index}
                  column={table.getColumn(item.title)}
                  title={capitalizeFirstLetter(item.title)}
                  options={item.options}
                />
              ),
          )}
        </div>
        {isFiltered && (
          <Button variant='ghost' onClick={() => table.resetColumnFilters()} className='h-8 px-2 lg:px-3'>
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <div className='flex items-center gap-2'>
        {children}
        <DataTableViewOptions table={table} />
      </div>{' '}
    </div>
  );
}
