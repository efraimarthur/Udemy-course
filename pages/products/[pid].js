/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loader from "../../components/Loader";
import Image from "next/image";
import CustomFetcher from "../../components/CustomFetcher";

const Products = () => {
  const router = useRouter();
  const { pid } = router.query;

  let url = `https://63fe98d1571200b7b7ccdbc5.mockapi.io/products/${pid}`;
  const [product] = CustomFetcher(url);

  // useEffect(() => {}, [pid]);

  return (
    <>
      {product.data ? (
        <div className="pb-20">
          <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
          <div>
            <img src={product.data.images} alt={product.data.name} />
          </div>
          <div className="text-lg mt-3">{product.data.description}</div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Products;
