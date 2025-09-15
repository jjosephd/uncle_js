import { useStore } from '../../store/store';
import { getTotalPrice } from '../../store/selectors';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Cart = () => {
  const { cart, addToCart, decrementItem, clearCart, isCartOpen, toggleCart } =
    useStore();
  const totalPrice = useStore(getTotalPrice);

  const cartVariants: Variants = {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black/10 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
          />
          <motion.div
            className="fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg z-50"
            variants={cartVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="header-container w-full bg-green-900 pt-2 flex justify-center items-center">
              <h2 className="text-2xl font-bold mb-4 text-center text-white">
                Your Cart
              </h2>
              <div
                className="close-cart-button btn btn-xs bg-transparent text-white absolute top-1 right-1 hover:bg-orange-500"
                onClick={toggleCart}
              >
                <FaArrowRight className="font-bold" />
              </div>
            </div>
            <div className="items-container p-6">
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <div>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center mb-2 border-b pb-2 "
                    >
                      <div>
                        <p className="font-semibold text-black">{item.name}</p>
                        <p className="text-sm text-black">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => decrementItem(item.id)}
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
                  <div className="btn-container flex flex-grow gap-2">
                    <button
                      onClick={clearCart}
                      className="btn btn-warning mt-4"
                    >
                      Checkout
                    </button>
                    <button
                      onClick={clearCart}
                      className="btn btn-warning mt-4"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
