import React from 'react';
import { favoriteItems } from '../../../data/favorites';
import FavoritesCard from './FavoritesCard';

const Favorites = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Our Favorites
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 justify-items-center">
        {favoriteItems.map((item) => (
          <FavoritesCard
            key={item.id}
            title={item.title}
            description={item.desc}
            image={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
