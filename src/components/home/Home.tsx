import React from 'react';
import Hero from './Hero';
import Favorites from './favorites/Favorites';

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <Hero />
      </section>
      <section className="favorites-section">
        <Favorites />
      </section>
    </div>
  );
};

export default Home;
