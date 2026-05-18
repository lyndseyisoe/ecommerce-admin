import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../services/productService";

export default function Admin() {
  const { products, loadProducts } = useProducts();

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
  });

  // CREATE
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(form);
    loadProducts();
  };

  // DELETE
  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  // UPDATE (simple example)
  const handleUpdate = async (id) => {
    await updateProduct(id, { name: "Updated Item" });
    loadProducts();
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      {/* CREATE */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Price"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          placeholder="Image URL"
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <button type="submit">Add Product</button>
      </form>

      {/* LIST */}
      {products.map((p) => (
        <div key={p.id}>
          <ProductCard product={p} onDelete={handleDelete} />
          <button onClick={() => handleUpdate(p.id)}>
            Update
          </button>
        </div>
      ))}
    </div>
  );
}