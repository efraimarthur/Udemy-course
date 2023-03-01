import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomFetcher = (url) => {
  const [products, setProducts] = useState({
    loading: false,
    data: null,
  });

  const getProducts = async () => {
    setProducts({
      loading: true,
      data: null,
    });
    try {
      const data = await axios.get(url);
      const response = data;
      setProducts({
        loading: false,
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return [products];
};

export default CustomFetcher;
