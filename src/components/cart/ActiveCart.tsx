import React from 'react';
import { useStore } from '../../store/store';

import { LuShoppingBasket } from 'react-icons/lu';
import CartCount from './CartCount';

const ActiveCart = () => {
  const { count } = useStore();
  return (
    <div className="relative flex items-center">
      <div>
        <LuShoppingBasket className="text-2xl" />
      </div>
      <div className="absolute -top-2 -right-3">
        <CartCount />
      </div>
    </div>
  );
};

export default ActiveCart;
