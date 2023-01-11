import React from 'react';
import { useContext } from 'react';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../products/products';
import CartContext from '../CartContext';

function ProductInfo() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { name, description, price, image } = useCallback(
    products.find((product) => product.id == id)
  );

  return (
    <div className="mt-14 flex flex-col px-4 md:flex-row">
      <img className="max-w-md rounded-md" src={image} alt={`${name} Image`} />
      <div className="md: mt-2 flex flex-col gap-4 px-4">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-xl">${price}</p>
        <p className="text-lg">{description}</p>
        <button
          className="self-start rounded-full bg-slate-900 py-2 px-6 text-lg"
          onClick={() =>
            addToCart({ name, id, description, price, image, count: 1 })
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
