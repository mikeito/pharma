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
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Name' />,
    // cell: ({ row }) => {
    //   const type = types.find((type) => type.value === row.original.type);

    //   return (
    //     <div className='flex space-x-2'>
    //       {type && (
    //         <Badge variant='outline' className='rounded-lg'>
    //           {type.label}
    //         </Badge>
    //       )}
    //       <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>{row.getValue('description')}</span>
    //     </div>
    //   );
    // },
  },
  {
    accessorKey: 'quantity',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Quantity' />,
  },
  {
    accessorKey: 'user',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Ordered by' />,
  },
  {
    accessorKey: 'date',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Expected date' />,
  },
  // {
  //   accessorKey: 'service_receiver',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title='Service Receiver' />
  //   ),
  // },
  // {
  //   accessorKey: 'date',
  //   header: ({ column }) => <DataTableColumnHeader column={column} title='Date' />,
  // },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
