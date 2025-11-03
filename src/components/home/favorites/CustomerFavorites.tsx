import { customerFavorites } from '../../../data/customerFavorites';
import CustomerFavoritesCard from './CustomerFavoritesCard';

const CustomerFavorites = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Customer Favorites
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
        {customerFavorites.map((item) => (
          <CustomerFavoritesCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CustomerFavorites;
