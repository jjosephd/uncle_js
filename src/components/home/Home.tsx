import React from 'react';
import Hero from './Hero';
import Favorites from './favorites/Favorites';
import Promotion from './promotion/Promotion';
import CustomerFavorites from './favorites/CustomerFavorites';

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <Hero />
      </section>
      <section className="favorites-section">
        <Favorites />
      </section>
      <section className="promotion-section">
        <Promotion />
      </section>
      <section className="customer-favorites-section">
        <CustomerFavorites />
      </section>
    </div>
  );
};

export default Home;
