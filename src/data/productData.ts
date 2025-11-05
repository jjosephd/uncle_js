import burgerImg from '../assets/images/burgerImg.jpg';
import chickenTendersImg from '../assets/images/chickenTenders.jpg';
import quesaImg from '../assets/images/quesaImg.jpg';
import wingsAndFriesImg from '../assets/images/wingsAndFriesImg.jpg';
import wrapsImg from '../assets/images/wrapsImg.jpg';
import dessertImg from '../assets/images/dessertImg.jpg';

// Menu item images
import alfredoImg from '../assets/images/menuItems/alfredoImg.jpg';
import baconBurgerImg from '../assets/images/menuItems/baconBurgerImg.jpg';
import breadImg from '../assets/images/menuItems/breadImg.jpg';
import calamariImg from '../assets/images/menuItems/calImg.jpg';
import cheeseburgImg from '../assets/images/menuItems/cheeseburgImg.jpg';
import cheeseSteakImg from '../assets/images/menuItems/cheeseSteak.jpg';
import chickParmImg from '../assets/images/menuItems/chickParmImg.jpg';
import chicksaladImg from '../assets/images/menuItems/chicksaladImg.jpg';
import cobbsaladImg from '../assets/images/menuItems/cobbsaladImg.jpg';
import csaladImg from '../assets/images/menuItems/csaladImg.jpg';
import fishImg from '../assets/images/menuItems/fishImg.jpg';
import friesImg from '../assets/images/menuItems/friesImg.jpg';
import grilledChickImg from '../assets/images/menuItems/grilledChickImg.jpg';
import gsaladImg from '../assets/images/menuItems/gsaladImg.jpg';
import lasagnaImg from '../assets/images/menuItems/lasagnaImg.jpg';
import mozSticksImg from '../assets/images/menuItems/mozSticks.jpg';
import nachosImg from '../assets/images/menuItems/nachosImg.jpg';
import penneImg from '../assets/images/menuItems/penneImg.jpg';
import pulledPorkImg from '../assets/images/menuItems/pulledPorkImg.jpg';
import ribeyeImg from '../assets/images/menuItems/ribeyeImg.jpg';
import ribsImg from '../assets/images/menuItems/ribsImg.jpg';
import ringsImg from '../assets/images/menuItems/ringsImg.jpg';
import salmonImg from '../assets/images/menuItems/salmonImg.jpg';
import scampiImg from '../assets/images/menuItems/scampiImg.jpg';
import slawImg from '../assets/images/menuItems/slawImg.jpg';
import spaghettiImg from '../assets/images/menuItems/spaghettiImg.jpg';
import spFriesImg from '../assets/images/menuItems/spFriesImg.jpg';
import spinDipImg from '../assets/images/menuItems/spinDipImg.jpg';
import cheesecakeImg from '../assets/images/menuItems/cheesecakeImg.jpg'
import applepieImg from '../assets/images/menuItems/applepieImg.jpg';
import sundaeImg from '../assets/images/menuItems/sundaeImg.jpg';

import coffeeImg from '../assets/images/menuItems/coffeeImg.jpg';
import lemonadeImg from '../assets/images/menuItems/lemonadeImg.jpg';
import sodaImg from '../assets/images/menuItems/sodaImg.jpg';
import teaImg from '../assets/images/menuItems/teaImg.jpg';

// Define the Product interface for type safety
export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  nutrition: Object;
  category: string;
}

// Group products by category for a structured menu
export const products: Product[] = [
  // --- Appetizers & Shareables ---
  {
    id: 7,
    name: 'Buffalo Wings',
    imageUrl: wingsAndFriesImg,
    description:
      'Crispy wings tossed in classic buffalo sauce, served with celery and blue cheese',
    price: 12.99,
    nutrition: {},
    category: 'Appetizers',
  },
  {
    id: 8,
    name: 'Mozzarella Sticks',
    imageUrl: mozSticksImg,
    description: 'Golden fried mozzarella served with marinara dipping sauce',
    price: 9.99,
    nutrition: {},
    category: 'Appetizers',
  },
  {
    id: 9,
    name: 'Loaded Nachos',
    imageUrl: nachosImg,
    description:
      'Crispy tortilla chips topped with cheese, jalapeños, sour cream, and guacamole',
    price: 14.99,
    nutrition: {},
    category: 'Appetizers',
  },
  {
    id: 10,
    name: 'Calamari Rings',
    imageUrl: calamariImg,
    description:
      'Tender squid rings lightly battered and fried, served with spicy marinara',
    price: 13.99,
    nutrition: {},
    category: 'Appetizers',
  },
  {
    id: 11,
    name: 'Spinach Artichoke Dip',
    imageUrl: spinDipImg,
    description:
      'Creamy blend of spinach, artichoke hearts, and cheese served with tortilla chips',
    price: 11.99,
    nutrition: {},
    category: 'Appetizers',
  },

  // --- Signature Items ---
  {
    id: 1,
    name: 'Juicy Burger',
    imageUrl: burgerImg,
    description:
      'Waygu beef patty, applewood smoked bacon, ranch, cheese, onions, pickles',
    price: 12.99,
    nutrition: {},
    category: 'Signature Items',
  },
  {
    id: 2,
    name: "Kickin' Chicken Tenders",
    imageUrl: chickenTendersImg,
    description:
      'Chicken tenders, white cheddar mac & cheese, fries, ranch, 2 dipping sauces',
    price: 14.99,
    nutrition: {},
    category: 'Signature Items',
  },
  {
    id: 3,
    name: 'Quesathrilla',
    imageUrl: quesaImg,
    description: 'Chicken, bacon, cheese, ranch, chile spices',
    price: 11.99,
    nutrition: {},
    category: 'Signature Items',
  },
  {
    id: 4,
    name: 'Wangz',
    imageUrl: wingsAndFriesImg,
    description:
      'The one and only! The style we invented over 30 years ago; tossed in your choice of wing sauce',
    price: 15.99,
    nutrition: {},
    category: 'Signature Items',
  },
  {
    id: 5,
    name: 'Wild Wild Wraps',
    imageUrl: wrapsImg,
    description:
      'Choose between chicken, shrimp, or steak and experience our tasty wraps.',
    price: 13.99,
    nutrition: {},
    category: 'Signature Items',
  },

  // --- Burgers & Sandwiches ---
  {
    id: 16,
    name: 'Classic Cheeseburger',
    imageUrl: cheeseburgImg,
    description:
      'Fresh beef patty with american cheese, lettuce, tomato, and pickles',
    price: 14.99,
    nutrition: {},
    category: 'Burgers & Sandwiches',
  },
  {
    id: 17,
    name: 'Bacon Avocado Burger',
    imageUrl: baconBurgerImg,
    description:
      'Beef patty topped with crispy bacon, fresh avocado, and swiss cheese',
    price: 17.99,
    nutrition: {},
    category: 'Burgers & Sandwiches',
  },
  {
    id: 18,
    name: 'BBQ Pulled Pork Sandwich',
    imageUrl: pulledPorkImg,
    description: 'Slow-cooked pulled pork in tangy BBQ sauce on a brioche bun',
    price: 15.99,
    nutrition: {},
    category: 'Burgers & Sandwiches',
  },
  {
    id: 19,
    name: 'Grilled Chicken Sandwich',
    imageUrl: grilledChickImg,
    description:
      'Grilled chicken breast with lettuce, tomato, and mayo on a toasted bun',
    price: 14.99,
    nutrition: {},
    category: 'Burgers & Sandwiches',
  },
  {
    id: 20,
    name: 'Philly Cheesesteak',
    imageUrl: cheeseSteakImg,
    description:
      'Sliced steak with grilled onions and peppers, topped with melted cheese',
    price: 16.99,
    nutrition: {},
    category: 'Burgers & Sandwiches',
  },

  // --- Main Courses ---
  {
    id: 21,
    name: 'Grilled Salmon',
    imageUrl: salmonImg,
    description:
      'Atlantic salmon grilled to perfection, served with lemon butter sauce',
    price: 22.99,
    nutrition: {},
    category: 'Main Courses',
  },
  {
    id: 22,
    name: 'Ribeye Steak',
    imageUrl: ribeyeImg,
    description:
      '12oz ribeye steak grilled to your preference, served with garlic butter',
    price: 28.99,
    nutrition: {},
    category: 'Main Courses',
  },
  {
    id: 23,
    name: 'Chicken Parmesan',
    imageUrl: chickParmImg,
    description:
      'Breaded chicken breast topped with marinara sauce and melted mozzarella',
    price: 19.99,
    nutrition: {},
    category: 'Main Courses',
  },
  {
    id: 24,
    name: 'Fish and Chips',
    imageUrl: fishImg,
    description: 'Beer-battered cod served with crispy fries and tartar sauce',
    price: 17.99,
    nutrition: {},
    category: 'Main Courses',
  },
  {
    id: 25,
    name: 'Shrimp Scampi',
    imageUrl: scampiImg,
    description:
      'Succulent shrimp sautéed in garlic, white wine, and butter sauce',
    price: 21.99,
    nutrition: {},
    category: 'Main Courses',
  },
  {
    id: 26,
    name: 'BBQ Ribs',
    imageUrl: ribsImg,
    description:
      'Fall-off-the-bone pork ribs smothered in our signature BBQ sauce',
    price: 24.99,
    nutrition: {},
    category: 'Main Courses',
  },

  // --- Pasta ---
  {
    id: 27,
    name: 'Spaghetti Carbonara',
    imageUrl: spaghettiImg,
    description:
      'Classic Italian pasta with pancetta, eggs, parmesan, and black pepper',
    price: 16.99,
    nutrition: {},
    category: 'Pasta',
  },
  {
    id: 28,
    name: 'Fettuccine Alfredo',
    imageUrl: alfredoImg,
    description:
      'Rich and creamy alfredo sauce tossed with fresh fettuccine pasta',
    price: 15.99,
    nutrition: {},
    category: 'Pasta',
  },
  {
    id: 29,
    name: 'Penne Arrabbiata',
    imageUrl: penneImg,
    description:
      'Penne pasta in a spicy tomato sauce with garlic and red pepper flakes',
    price: 14.99,
    nutrition: {},
    category: 'Pasta',
  },
  {
    id: 30,
    name: 'Lasagna',
    imageUrl: lasagnaImg,
    description: 'Layers of pasta, meat sauce, ricotta, and mozzarella cheese',
    price: 18.99,
    nutrition: {},
    category: 'Pasta',
  },

  // --- Salads ---
  {
    id: 12,
    name: 'Caesar Salad',
    imageUrl: csaladImg,
    description:
      'Crisp romaine lettuce, parmesan cheese, croutons, and caesar dressing',
    price: 10.99,
    nutrition: {},
    category: 'Salads',
  },
  {
    id: 13,
    name: 'Greek Salad',
    imageUrl: gsaladImg,
    description:
      'Mixed greens, feta cheese, olives, tomatoes, and Greek vinaigrette',
    price: 12.99,
    nutrition: {},
    category: 'Salads',
  },
  {
    id: 14,
    name: 'Grilled Chicken Salad',
    imageUrl: chicksaladImg,
    description:
      'Fresh mixed greens topped with grilled chicken breast and your choice of dressing',
    price: 15.99,
    nutrition: {},
    category: 'Salads',
  },
  {
    id: 15,
    name: 'Cobb Salad',
    imageUrl: cobbsaladImg,
    description:
      'Mixed greens, bacon, blue cheese, hard-boiled egg, avocado, and chicken',
    price: 16.99,
    nutrition: {},
    category: 'Salads',
  },

  // --- Sides ---
  {
    id: 31,
    name: 'French Fries',
    imageUrl: friesImg,
    description: 'Crispy golden fries seasoned with salt',
    price: 5.99,
    nutrition: {},
    category: 'Sides',
  },
  {
    id: 32,
    name: 'Sweet Potato Fries',
    imageUrl: spFriesImg,
    description: 'Crispy sweet potato fries with a hint of cinnamon',
    price: 6.99,
    nutrition: {},
    category: 'Sides',
  },
  {
    id: 33,
    name: 'Onion Rings',
    imageUrl: ringsImg,
    description: 'Thick-cut onions breaded and fried until golden brown',
    price: 6.99,
    nutrition: {},
    category: 'Sides',
  },
  {
    id: 34,
    name: 'Coleslaw',
    imageUrl: slawImg,
    description: 'Fresh cabbage and carrots in a creamy dressing',
    price: 4.99,
    nutrition: {},
    category: 'Sides',
  },
  {
    id: 35,
    name: 'Garlic Bread',
    imageUrl: breadImg,
    description: 'Toasted bread with garlic butter and parmesan cheese',
    price: 5.99,
    nutrition: {},
    category: 'Sides',
  },

  // --- Desserts ---
  {
    id: 6,
    name: 'Chocolate Paradise',
    imageUrl: dessertImg,
    description: 'Get your fix in with our triple chocolate cake.',
    price: 8.99,
    nutrition: {},
    category: 'Desserts',
  },
  {
    id: 36,
    name: 'New York Cheesecake',
    imageUrl: cheesecakeImg,
    description: 'Classic creamy cheesecake with graham cracker crust',
    price: 7.99,
    nutrition: {},
    category: 'Desserts',
  },
  {
    id: 37,
    name: 'Apple Pie',
    imageUrl: applepieImg,
    description: 'Traditional apple pie with cinnamon and a flaky crust',
    price: 6.99,
    nutrition: {},
    category: 'Desserts',
  },
  {
    id: 38,
    name: 'Ice Cream Sundae',
    imageUrl: sundaeImg,
    description:
      'Three scoops of vanilla ice cream with chocolate sauce and whipped cream',
    price: 5.99,
    nutrition: {},
    category: 'Desserts',
  },

  // --- Beverages ---
  {
    id: 39,
    name: 'Coca Cola',
    imageUrl: sodaImg,
    description: 'Classic refreshing cola served ice cold',
    price: 2.99,
    nutrition: {},
    category: 'Beverages',
  },
  {
    id: 40,
    name: 'Fresh Lemonade',
    imageUrl: lemonadeImg,
    description: 'House-made lemonade with fresh squeezed lemons',
    price: 3.99,
    nutrition: {},
    category: 'Beverages',
  },
  {
    id: 41,
    name: 'Coffee',
    imageUrl: coffeeImg,
    description: 'Freshly brewed coffee, regular or decaf',
    price: 2.49,
    nutrition: {},
    category: 'Beverages',
  },
  {
    id: 42,
    name: 'Iced Tea',
    imageUrl: teaImg,
    description: 'Refreshing iced tea, sweetened or unsweetened',
    price: 2.99,
    nutrition: {},
    category: 'Beverages',
  },
];
