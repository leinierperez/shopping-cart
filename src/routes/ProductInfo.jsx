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
    <div>
      <img className="" src={image} alt={`${name} Image`} />
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-xl">$ {price}</p>
      <p className="">$ {description}</p>
      <button
        className="bg-slate-900"
        onClick={() =>
          addToCart({ name, id, description, price, image, count: 1 })
        }
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductInfo;
