export interface Transaction {
  id: number;
  type: string;
  amount: number;
  status: string;
  date: string;
  description: string;
  location?: string;
  service_provider?: string;
  service_receiver?: string;
  bill_recipient?: string;
}

export const transactions: Transaction[] = [
  {
    id: 1,
    type: 'transfer',
    amount: 20000,
    service_provider: 'MTN Mobile Money',
    service_receiver: 'Bank Account',
    status: 'completed',
    date: '2024-04-22',
    description: 'Transfer of 20,000 FCFA from MTN Mobile Money to Bank Account',
  },
  {
    id: 2,
    type: 'withdrawal',
    amount: 50000,
    service_provider: 'Orange Money',
    location: 'Agent',
    status: 'pending',
    date: '2024-04-22',
    description: 'Withdrawal of 50,000 FCFA from Orange Money Agent',
  },
  {
    id: 3,
    type: 'bill payment',
    amount: 10000,
    service_provider: 'MTN',
    bill_recipient: 'ENEO (electricity)',
    status: 'canceled',
    date: '2024-04-22',
    description: 'Payment of 10,000 FCFA electricity bill to ENEO via MTN Mobile Money',
  },
  {
    id: 4,
    type: 'transfer',
    amount: 30000,
    service_provider: 'Bank Account',
    service_receiver: 'Orange Money Wallet',
    status: 'pending',
    date: '2024-04-22',
    description: 'Transfer of 30,000 FCFA from Bank Account to Orange Money Wallet',
  },
  {
    id: 5,
    type: 'bill payment',
    amount: 15000,
    service_provider: 'Orange',
    bill_recipient: 'CAM WATER (water)',
    status: 'completed',
    date: '2024-04-22',
    description: 'Payment of 15,000 FCFA water bill to CAM WATER via Orange Money',
  },
];
