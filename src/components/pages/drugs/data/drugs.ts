export interface Drug {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

export const drugsData: Drug[] = [
  {
    id: 1,
    name: 'Paracetamol',
    description: 'Paracetamol, also known as acetaminophen, is a commonly used medication for pain relief and fever reduction. It is widely available over the counter and is used to treat a variety of conditions, including headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers.',
    quantity: 40,
    price: 1000.00,
  },
  {
    id: 2,
    name: 'Chloroquine',
    description: 'Chloroquine works by interfering with the growth of parasites in red blood cells. It inhibits the parasites ability to break down and digest hemoglobin, which is crucial for their survival and replication.',
    quantity: 40,
    price: 1200.00,
  }
];
