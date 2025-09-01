import foodTruckImg from '../assets/images/customer-favorites/foodtruckImg.jpg';
import margaritaImg from '../assets/images/customer-favorites/margaritaImg.jpg';
import nightlifeImg from '../assets/images/customer-favorites/nightlifeImg.jpg';
import partyImg from '../assets/images/customer-favorites/partyImg.jpg';

export const favoriteItems = [
  {
    title: 'Margarita Mondays',
    imageUrl: margaritaImg,
    desc: 'Bring a friend with you on Mondays and enjoy a $2.50 margarita!',
    id: 1,
  },
  {
    title: 'Saturday Smash',
    imageUrl: nightlifeImg,
    desc: 'Chicken tenders, white cheddar mac & cheese, fries, ranch, 2 dipping sauces',
    id: 2,
  },
  {
    title: 'Quesathrilla',
    imageUrl: partyImg,
    desc: 'Chicken, bacon, cheese, ranch, chile spices',
    id: 3,
  },
  {
    title: 'Food Truck Fridays',
    imageUrl: foodTruckImg,
    desc: 'Catch us at the uptown nightlife area on Fridays when we take our show on the road.',
    id: 4,
  },
];
