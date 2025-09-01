import React from 'react';
import { useStore } from '../../store/store';

const CartCount = () => {
  const { count } = useStore();
  return (
    <div className="bg-green-900 border-2 border-black text-white rounded-full size-5 flex items-center justify-center text-xs font-bold">
      {count}
    </div>
  );
};

export default CartCount;
