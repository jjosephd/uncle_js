import foodTruckImg from '../assets/images/customer-favorites/foodtruckImg.jpg';
import margaritaImg from '../assets/images/customer-favorites/margaritaImg.jpg';
import nightlifeImg from '../assets/images/customer-favorites/nightlifeImg.jpg';
import partyImg from '../assets/images/customer-favorites/partyImg.jpg';
import type { Product } from './productData';

export interface CustomerFavorite extends Omit<Product, 'category' | 'nutrition'> {
  tags: string[];
}

export const customerFavorites: CustomerFavorite[] = [
  {
    id: 1,
    name: 'Margarita Mondays',
    imageUrl: margaritaImg,
    description: 'Bring a friend with you on Mondays and enjoy a $2.50 margarita!',
    price: 2.50,
    tags: ['21+']
  },
  {
    id: 2,
    name: 'Saturday Smash',
    imageUrl: nightlifeImg,
    description: 'Saturdays just for you! Join us for live music and half off drinks from 6pm to 10pm!',
    price: 14.99,
    tags: ['Tickets Required']
  },
  {
    id: 3,
    name: 'After Hours Casino',
    imageUrl: partyImg,
    description: 'Make your after hours experience unforgettable with our casino-style games and live music!',
    price: 12.99,
    tags: ['18+', 'Tickets Required']
  },
  {
    id: 4,
    name: 'Food Truck Fridays',
    imageUrl: foodTruckImg,
    description: 'Catch us at the uptown nightlife area on Fridays when we take our show on the road.',
    price: 0,
    tags: ['Free']
  },
 
];
