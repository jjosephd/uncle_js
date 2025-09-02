import React from 'react';
import { LuShoppingBasket } from 'react-icons/lu';
import CartCount from './CartCount';
import Cart from './Cart';

const ActiveCart = () => {
  return (
    <div className="relative flex items-center">
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
