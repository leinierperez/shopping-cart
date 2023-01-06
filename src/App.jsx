import React from 'react';
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
