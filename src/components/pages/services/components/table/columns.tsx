'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from 'src/components/ui/badge';
import { Checkbox } from 'src/components/ui/checkbox';
import { DataTableRowActions } from './data-table-row-actions';

import { DataTableColumnHeader } from 'src/components/table/data-table-column-header';
import { statuses, types } from '../../data/data';
import capitalizeFirstLetter from 'src/helpers/capitalize';
import { Transaction } from 'src/types';

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
    accessorKey: 'customer_account',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Customer Account' />,
    enableHiding: true,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: 'receiver_account',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Receiver Account' />,
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Amount' />,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Status' />,
    // cell: ({ row }) => {
    //   const status = statuses.find((status) => status.value === row.getValue('status'));

    //   if (!status) {
    //     return null;
    //   }

    //   return (
    //     <div className='flex w-[100px] items-center'>
    //       {status.icon && <status.icon className='mr-2 h-4 w-4 text-muted-foreground' />}
    //       <span>{status.label}</span>
    //     </div>
    //   );
    // },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
