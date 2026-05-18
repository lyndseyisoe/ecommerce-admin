import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export default function useProducts() {

  const [products,setProducts]=
  useState([]);

  const [loading,setLoading]=
  useState(true);

  const [error,setError]=
  useState(null);

  const loadProducts =
  async()=>{

    try{

      setLoading(true);

      const data=
      await getProducts();

      setProducts(data);

    }catch(err){

      setError(err.message);

    }finally{

      setLoading(false);

    }

  };

  useEffect(()=>{

    loadProducts();

  },[]);

  return{

    products,
    loading,
    error,
    loadProducts

  };

}