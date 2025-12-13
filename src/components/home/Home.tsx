import Hero from './Hero';
import Favorites from './favorites/Favorites';
import Promotion from './promotion/Promotion';
import CustomerFavorites from './favorites/CustomerFavorites';
import About from './about/About';
import RestaurantMap from '../map/RestaurantMap';

const Home = () => {
  return (
    <div className="flex flex-col">
      {' '}
      {/* Add a flex column container */}
      <section id="hero-section" className="hero-section">
        <Hero />
      </section>
      <section
        id="about-section"
        className="about-section"
        data-testid="about-section"
      >
        <About />
        <RestaurantMap />
      </section>
      <section id="favorites-section" className="favorites-section">
        <Favorites />
      </section>
      <section
        id="promotion-section"
        className="promotion-section"
        aria-label="Promotions"
      >
        <Promotion />
      </section>
      <section
        id="customer-favorites-section"
        className="customer-favorites-section"
        aria-label="events"
      >
        <CustomerFavorites />
      </section>
    </div>
  );
};

export default Home;
