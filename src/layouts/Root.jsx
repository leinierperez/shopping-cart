import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';

export default function Root() {
  const { cart } = useContext(CartContext);

  return (
    <div className="text-white">
      <header className="bg-gray-900 text-2xl font-semibold">
        <nav className="mx-auto flex max-w-4xl justify-between py-4 px-6">
          <div>
            <Link to="/">
              <h1>Shopping Cart</h1>
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
            <Link to="cart">Cart ({cart.length})</Link>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-screen-xl">
        <Outlet />
      </main>
    </div>
  );
}
