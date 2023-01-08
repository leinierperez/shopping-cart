import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from './routes/Home';
import Shop from './routes/Shop';
import ProductInfo from './routes/ProductInfo';
import Cart from './routes/Cart';
import ErrorPage from './routes/Error';
import Root from './layouts/Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductInfo />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);
import CartContext from './CartContext';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const index = cart.findIndex((product) => product.id == item.id);
    if (index > -1) {
      const newCart = [...cart];
      newCart[index].count++;
      setCart(newCart);
    } else {
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;
