

import { products } from '../../data/productData';
const Menu = () => {
  return (
    <div className="text-white">
      {products.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default Menu;
