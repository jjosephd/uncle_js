import { products } from '../../data/productData';
import { useNavigate } from 'react-router-dom';
import MenuFilterButton from './MenuFilterButton';
import MenuFilter from './MenuFilter';

const Menu = () => {
  const navigate = useNavigate();

  // Group products by category
  const categorizedProducts: { [key: string]: typeof products } =
    products.reduce((acc, product) => {
      const { category } = product;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {} as { [key: string]: typeof products });

  return (
    <div className="w-screen">
      <div className="m-4  p-4">
        <MenuFilterButton />
        <MenuFilter />
      </div>

      {Object.keys(categorizedProducts).map((categoryName) => (
        <div key={categoryName}>
          <h2 className="text-3xl font-bold text-center text-orange-500 my-8">
            {categoryName}
          </h2>
          <hr className="border-t-2 border-orange-500/50 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
            {categorizedProducts[categoryName].map((item) => (
              <div
                key={item.id}
                className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border border-orange-500/20"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-orange-500 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2 px-2 sm:px-0">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold text-lg">
                      ${item.price.toFixed(2)}
                    </span>
                    <button className="btn btn-sm btn-primary">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="btn btn-warning" onClick={() => navigate(-1)}>
        Previous Page
      </button>
    </div>
  );
};

export default Menu;
