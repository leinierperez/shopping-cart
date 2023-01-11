import React from 'react';
import { Link } from 'react-router-dom';

function Product({ name, price, image, id }) {
  return (
    <Link
      to={id.toString()}
      className="max-w-[16rem] cursor-pointer space-y-2 overflow-hidden rounded-sm text-gray-100"
    >
      <img className="" src={image} alt={`${name} Image`} />
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-xl">${price}</p>
    </Link>
  );
}

export default Product;
