import { RefreshCcw, CircleCheckBig, CircleOff, ArrowDown, ArrowUp, ReceiptText } from 'lucide-react';

export const statuses = [
  {
    value: 'pending',
    label: 'Pending',
    icon: RefreshCcw,
  },
  {
    value: 'completed',
    label: 'Completed',
    icon: CircleCheckBig,
  },
  {
    value: 'canceled',
    label: 'Canceled',
    icon: CircleOff,
  },
];

export const types = [
  {
    value: 'transfer',
    label: 'Transfer',
    icon: ArrowUp,
  },
  {
    value: 'withdrawal',
    label: 'Withdrawal',
    icon: ArrowDown,
  },
  {
    value: 'bill payment',
    label: 'Bill Payment',
    icon: ReceiptText,
  },
];
