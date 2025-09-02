import React from 'react';
import { useStore } from '../../../store/store';
import type { Product } from '../../../data/productData';

const FavoritesCard = ({ item }: { item: Product }) => {
  const { addToCart, cart } = useStore();

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    });
  };

  return (
    <div className="card w-full border-2 border-slate-500/20 text-white shadow-xl rounded-lg overflow-hidden">
      <figure className="relative h-64">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-6 ">
        <h2 className="card-title text-2xl font-semibold mb-2">{item.name}</h2>
        <p
          className=" mb-4"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
          }}
        >
          {item.description}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary w-full" onClick={handleAddToCart}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoritesCard;
