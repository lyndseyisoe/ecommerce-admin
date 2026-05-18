import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return { products, setProducts, loadProducts };
}