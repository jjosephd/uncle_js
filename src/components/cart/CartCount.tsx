
import { useStore } from '../../store/store';
import { getTotalItems } from '../../store/selectors';

const CartCount = () => {
  const totalItems = useStore(getTotalItems);

  return (
    <div className="bg-green-900 border-2 border-black text-white rounded-full size-5 flex items-center justify-center text-xs font-bold">
      {totalItems}
    </div>
  );
};

export default CartCount;
