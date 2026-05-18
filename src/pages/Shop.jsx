import { useState } from "react";
import useProducts from "../hooks/useProducts";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function Shop() {

  const { products } =
    useProducts();

  const [search,
    setSearch] =
    useState("");

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (

    <div>

      <h1>
        Coffee Shop
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {filteredProducts.map(
        (product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        )
      )}

    </div>

  );
}