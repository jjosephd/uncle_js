import React from 'react';
import { useStore } from '../../store/store';
import { getTotalItems, getTotalPrice } from '../../store/selectors';

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useStore();
  const totalPrice = useStore(getTotalPrice);
  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-2 border-b pb-2"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-sm btn-error"
                >
                  -
                </button>
                <button
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      quantity: 1,
                    })
                  }
                  className="btn btn-sm btn-success"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <button onClick={clearCart} className="btn btn-warning mt-4">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
