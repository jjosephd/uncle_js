import { products } from './productData';

// Define which product IDs are considered favorites
const favoriteProductIds = [1, 2, 3, 4, 5, 6];

// Filter the products array to get only the favorite items
export const favoriteItems = products.filter((product) =>
  favoriteProductIds.includes(product.id)
);
