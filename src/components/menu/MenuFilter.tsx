import { useStore } from '../../store/store';
import { motion } from 'framer-motion';
import { products } from '../../data/productData';

// Get a list of unique categories from the products array
const uniqueCategories = [
  ...new Set(products.map((product) => product.category)),
];

const MenuFilter = () => {
  const { filterActive, activeCategory } = useStore();

  const handleFilterClick = (category: string) => {
    console.log(`Filtering by: ${category}`);
    useStore
      .getState()
      .setActiveCategory(category === activeCategory ? null : category);
  };

  const handleResetFilterClick = () => {
    useStore.getState().setActiveCategory(null);
    console.log('Resetting filters');
  };

  return (
    <>
      {filterActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute  bg-slate-800/80 items-center mt-2"
        >
          <motion.div
            initial={{ y: '-5vh' }}
            animate={{ y: 0 }}
            exit={{ y: '-100vh' }}
            transition={{ type: 'spring', damping: 40, stiffness: 300 }}
            className="p-8 border border-slate-400/20 rounded-lg shadow-lg"
          >
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Filter Options</h2>
              <ul className="space-y-2">
                {uniqueCategories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleFilterClick(category)}
                      className="rounded hover:border  shadow-lg pr-6 pl-2 flex flex-start hover:cursor-pointer hover:bg-orange-500"
                    >
                      {category}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handleResetFilterClick()}
                    className="absolute bottom-0 bg-primary rounded hover:border  shadow-lg pr-6 pl-2 flex flex-start hover:cursor-pointer hover:bg-orange-500"
                  >
                    Reset Options
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default MenuFilter;
