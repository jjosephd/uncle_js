import Hero from './Hero';
import Favorites from './favorites/Favorites';
import Promotion from './promotion/Promotion';
import CustomerFavorites from './favorites/CustomerFavorites';
import About from './about/About';

const Home = () => {
  return (
    <div className="flex flex-col">
      {' '}
      {/* Add a flex column container */}
      <section id="hero-section" className="hero-section">
        <Hero />
      </section>
      <section id="about-section" className="about-section">
        <About />
      </section>
      <section id="favorites-section" className="favorites-section">
        <Favorites />
      </section>
      <section id="promotion-section" className="promotion-section">
        <Promotion />
      </section>
      <section
        id="customer-favorites-section"
        className="customer-favorites-section"
      >
        <CustomerFavorites />
      </section>
    </div>
  );
};

export default Home;
