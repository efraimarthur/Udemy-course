import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loader from "../../components/Loader";

const Products = () => {
  const [product, setProduct] = useState({
    loading: false,
    data: null,
  });

  const router = useRouter();
  const { pid } = router.query;

  const getProduct = async () => {
    setProduct({
      loading: true,
      data: null,
    });
    try {
      const data = await axios.get(
        `https://63fe98d1571200b7b7ccdbc5.mockapi.io/products/${pid}`
      );
      const response = data;
      setProduct({
        loading: false,
        data: response.data,
      });
    } catch (error) {}
  };

  useEffect(() => {
    getProduct();
  }, [pid]);

  return (
    <>
      {product.data ? (
        <div>
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
