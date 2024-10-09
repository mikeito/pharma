'use client';

import { DownloadIcon } from '@radix-ui/react-icons';
import { type Table } from '@tanstack/react-table';

import { exportTableToCSV } from 'src/lib/export';
import { Button } from 'src/components/ui/button';
import { DeleteTasksDialog } from '../pages/transactions/components/table/delete-tasks-dialog';

interface TasksTableToolbarActionsProps {
  table: any;
  actions?: any;
}

export function TasksTableToolbarActions({ table, actions }: TasksTableToolbarActionsProps) {
  return (
    <div className='flex items-center gap-2'>
      {actions}
      {table.getFilteredSelectedRowModel().rows.length > 0 ? (
        <DeleteTasksDialog tasks={table.getFilteredSelectedRowModel().rows} onSuccess={() => table.toggleAllPageRowsSelected(false)} />
      ) : null}

      <Button
        variant='outline'
        size='sm'
        onClick={() =>
          exportTableToCSV(table, {
            filename: 'tasks',
            excludeColumns: ['select', 'actions'],
          })
        }
      >
        <DownloadIcon className='mr-2 size-4' aria-hidden='true' />
        Export
      </Button>
      {/**
       * Other actions can be added here.
       * For example, export, import, etc.
       */}
    </div>
  );
}
