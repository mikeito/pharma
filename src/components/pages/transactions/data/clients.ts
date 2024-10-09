export interface Client {
  id: number;
  type: string;
  email: string;
  name: string;
  telephone: string;
  longitude: string;
  latitude: string;
  address: string;
  openHours: string;
  closingHours?: string;
}

export const clientsData: Client[] = [
  {
    id: 1,
    type: 'PHARMACY',
    email: 'test@gmail.com',
    name: 'Pharmacie de makepe',
    telephone: '622445477',
    longitude: '9.7140',
    latitude: '4.0678',
    address: 'Deido',
    openHours: '08:00 am',
  },
  {
    id: 2,
    type: 'HOSPITAL',
    email: 'test@gmail.com',
    name: 'Lacintini',
    telephone: '622445533',
    longitude: '9.7108',
    latitude: '4.0655',
    address: 'Deido',
    openHours: '08:00 am',
  },
  {
    id: 3,
    type: 'HEALTHCENTER',
    email: 'test@gmail.com',
    name: 'Cité des Palmiers Health Center',
    telephone: '677882255',
    longitude: '9.7119',
    latitude: '4.0673',
    address: 'Deido',
    openHours: '08:00 am',
  },
];
