import React, { useContext } from 'react';
import CartContext from '../CartContext';

function Cart() {
  const { cart, addToCart, removeFromCart, setCart } = useContext(CartContext);
  const subTotal = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.count;
  }, 0);

  return (
    <>
      {cart.length > 0 ? (
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 py-14 px-4">
          <h1 className="text-3xl">Your Cart</h1>
          {cart.map(({ name, id, price, image, count }) => {
            return (
              <div
                key={id}
                className="flex w-full items-center rounded-lg bg-gray-600 p-2"
              >
                <img
                  className="w-36 rounded-lg"
                  src={image}
                  alt={`${name} Image`}
                />
                <div className="flex w-full flex-col items-center gap-2">
                  <h2 className="text-xl font-semibold">{name}</h2>
                  <div className="flex items-center gap-3">
                    <button
                      className="h-6 w-6 rounded-full bg-gray-900"
                      onClick={() => removeFromCart(id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </button>
                    <p className="text-xl">{count}</p>
                    <button
                      className="h-6 w-6 rounded-full bg-gray-900"
                      onClick={() =>
                        addToCart({ name, id, price, image, count })
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-lg">${price}/ unit</p>
                </div>
              </div>
            );
          })}
          <div className="flex w-full justify-between">
            <button
              className="rounded-md bg-gray-900 p-2 shadow-sm shadow-gray-500"
              onClick={() => setCart([])}
            >
              Checkout
            </button>
            <div className="flex gap-4 rounded-md bg-gray-600 py-2 px-4">
              <h3 className="">Subtotal</h3>
              <p className="font-bold">${subTotal}</p>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="py-14 text-center text-3xl">Your Cart is empty!</h1>
      )}
    </>
  );
}

export default Cart;
