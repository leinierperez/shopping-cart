import React from 'react';
import { products } from '../products/products';
import Product from '../components/Product';

function Shop() {
  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(theme(width.12),theme(width.60)))] justify-center gap-10 py-14 px-4 ">
      {products.map(({ name, id, price, image }) => (
        <Product name={name} key={id} price={price} image={image} id={id} />
      ))}
    </main>
  );
}

export default Shop;
