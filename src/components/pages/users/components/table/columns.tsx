'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from 'src/components/ui/badge';
import { Checkbox } from 'src/components/ui/checkbox';
import { DataTableRowActions } from './data-table-row-actions';

import { DataTableColumnHeader } from 'src/components/table/data-table-column-header';
import { statuses, types } from '../../data/data';
import { Transaction } from '../../data/transactions';
import capitalizeFirstLetter from 'src/helpers/capitalize';

export const columns: ColumnDef<Transaction>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Id' />,
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <DataTableColumnHeader column={column} title='email' />,
    cell: ({ row }) => {
      const type = types.find((type) => type.value === row.original.type);

      return (
        <div className='flex space-x-2'>
          {type && (
            <Badge variant='outline' className='rounded-lg'>
              {type.label}
            </Badge>
          )}
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>{row.getValue('description')}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'type',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Type' />,
    enableHiding: true,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'service_provider',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Service Provider' />,
  },
  // {
  //   accessorKey: 'service_receiver',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title='Service Receiver' />
  //   ),
  // },
  {
    accessorKey: 'amount',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Amount' />,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Status' />,
    cell: ({ row }) => {
      const status = statuses.find((status) => status.value === row.getValue('status'));

      if (!status) {
        return null;
      }

      return (
        <div className='flex w-[100px] items-center'>
          {status.icon && <status.icon className='mr-2 h-4 w-4 text-muted-foreground' />}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'date',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Date' />,
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
