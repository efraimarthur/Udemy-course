/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="mb-5 p-2 pb-5 shadow-lg border border-slate-300 rounded-md md:w-4/5 lg:w-3/5">
        <div className="flex flex-col justify-center items-center ">
          <Link href={`/products/${product.id}`}>
            <img
              src={product.images}
              alt={product.name}
              className="bg-slate-500"
            />
          </Link>
          <p className="text-xl font-semibold my-3">{product.name}</p>
          <p className="text-slate-600">{product.description}</p>
          <Link
            href={`/products/${product.id}`}
            className="bg-sky-600 font-semibold text-slate-50 flex justify-center items-center py-2 rounded-md mt-5 md:w-4/6 lg:w-3/6 w-full"
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
