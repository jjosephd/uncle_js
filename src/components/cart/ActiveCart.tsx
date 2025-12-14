import { LuShoppingBasket } from 'react-icons/lu';
import CartCount from './CartCount';
import { useStore } from '../../store/store';

const ActiveCart = () => {
  const toggleCart = useStore((state) => state.toggleCart);

  return (
    <div className="relative flex items-center" onClick={toggleCart}>
      <div>
        <LuShoppingBasket className="text-2xl hover:cursor-pointer" />
      </div>
      <div className="absolute -top-2 -right-3">
        <CartCount />
      </div>
    </div>
  );
};

export default ActiveCart;
