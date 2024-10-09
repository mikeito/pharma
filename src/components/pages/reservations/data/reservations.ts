export interface Drug {
  id: number;
  name: string;
  quantity: number;
  user: string;
  date: string;
}

export const reservationsData: Drug[] = [
  {
    id: 1,
    name: 'Paracetamol',
    quantity: 2,
    user: 'John Doe',
    date: '2024-08-22'
  },
  {
    id: 2,
    name: 'Nivaquine',
    quantity: 4,
    user: 'Anna longoria',
    date: '2024-08-28'
  }
];
