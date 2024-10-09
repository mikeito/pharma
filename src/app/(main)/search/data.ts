export interface IOrganisation {
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
  description?:string;
  image?:string;
}

export const orgs:IOrganisation[] = [
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
    description: 'Featuring a sleek, contemporary design, this pharmacy prioritizes efficiency with quick prescription processing and a wide selection of health essentials. Advanced technology and a well-organized layout ensure a smooth and convenient shopping experience for busy individuals.',
    image: '/cross.jpg'
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
    description: 'This charming local pharmacy offers a warm, personalized touch with a knowledgeable staff. It’s the go-to spot for prescription refills, over-the-counter medications, and a variety of health and wellness products. Expect friendly service and a welcoming atmosphere.',
        image: '/cross2.jpg'
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
    description: 'This charming local pharmacy offers a warm, personalized touch with a knowledgeable staff. It’s the go-to spot for prescription refills, over-the-counter medications, and a variety of health and wellness products. Expect friendly service and a welcoming atmosphere.',
        image: '/cross2.jpg'
  },
];