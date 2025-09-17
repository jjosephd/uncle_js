import { products } from '../../data/productData';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
  return (
    <div className="m-4">
      <div className="text-white">
        {products.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
      <button className="btn btn-warning" onClick={() => useNavigate()(-1)}>
        Previous Page
      </button>
    </div>
  );
};

export default Menu;
