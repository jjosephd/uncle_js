import foodTruckImg from '../assets/images/customer-favorites/foodtruckImg.jpg';
import margaritaImg from '../assets/images/customer-favorites/margaritaImg.jpg';
import nightlifeImg from '../assets/images/customer-favorites/nightlifeImg.jpg';
import partyImg from '../assets/images/customer-favorites/partyImg.jpg';
import type { Product } from './productData';

export interface CustomerFavorite extends Omit<Product, 'category' | 'nutrition'> {
  proteins: string[];
}

export const customerFavorites: CustomerFavorite[] = [
  {
    id: 1,
    name: 'Margarita Mondays',
    imageUrl: margaritaImg,
    description: 'Bring a friend with you on Mondays and enjoy a $2.50 margarita!',
    price: 2.50,
    proteins: ['21+']
  },
  {
    id: 2,
    name: 'Saturday Smash',
    imageUrl: nightlifeImg,
    description: 'Chicken tenders, white cheddar mac & cheese, fries, ranch, 2 dipping sauces',
    price: 14.99,
    proteins: ['Tickets Required']
  },
  {
    id: 3,
    name: 'After Hours Casino',
    imageUrl: partyImg,
    description: 'Chicken, bacon, cheese, ranch, chile spices',
    price: 12.99,
    proteins: ['18+', 'Tickets Required']
  },
  {
    id: 4,
    name: 'Food Truck Fridays',
    imageUrl: foodTruckImg,
    description: 'Catch us at the uptown nightlife area on Fridays when we take our show on the road.',
    price: 0,
    proteins: ['Free']
  },
 
];
