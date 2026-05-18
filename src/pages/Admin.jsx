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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(form);
    setForm({ name: "", price: "", image: "" });
    loadProducts();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  const handleUpdate = async (id) => {
    await updateProduct(id, { name: "Updated Item" });
    loadProducts();
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <input
          placeholder="Price"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />
        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />

        <button type="submit">Add Product</button>
      </form>

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