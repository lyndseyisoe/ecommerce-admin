import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../services/productService";

export default function Admin() {
  const { products, loadProducts } =
    useProducts();

  const [form, setForm] =
    useState({
      name: "",
      price: "",
      image: "",
      category: "",
    });

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      await createProduct(form);

      setForm({
        name: "",
        price: "",
        image: "",
        category: "",
      });

      loadProducts();
    };

  const handleDelete =
    async (id) => {

      await deleteProduct(id);

      loadProducts();
    };

  const handleUpdate =
    async (id) => {

      const newName =
        prompt(
          "Enter new product name:"
        );

      if (!newName) return;

      await updateProduct(
        id,
        {
          name: newName,
        }
      );

      loadProducts();
    };

  return (

    <div className="p-6">

      <h1 className="
      text-3xl
      font-bold
      mb-6
      ">
        Admin Panel
      </h1>


      {/* ADD PRODUCT FORM */}

      <form
        onSubmit={handleSubmit}

        className="
        flex
        flex-col
        gap-4
        mb-8
        "
      >

        <input
          placeholder="Name"

          value={form.name}

          onChange={(e) =>

            setForm({

              ...form,

              name:
              e.target.value

            })

          }

          className="
          border
          p-2
          rounded
          "
        />


        <input
          placeholder="Price"

          value={form.price}

          onChange={(e) =>

            setForm({

              ...form,

              price:
              e.target.value

            })

          }

          className="
          border
          p-2
          rounded
          "
        />


        <input
          placeholder="Image URL"

          value={form.image}

          onChange={(e) =>

            setForm({

              ...form,

              image:
              e.target.value

            })

          }

          className="
          border
          p-2
          rounded
          "
        />


        <input
          placeholder="Category"

          value={form.category}

          onChange={(e) =>

            setForm({

              ...form,

              category:
              e.target.value

            })

          }

          className="
          border
          p-2
          rounded
          "
        />


        <button

          type="submit"

          className="
          bg-black
          text-white
          p-2
          rounded
          hover:opacity-80
          "
        >

          Add Product

        </button>

      </form>



      {/* PRODUCTS */}

      <div className="
      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-6
      ">

        {

          products.map(

            (p) => (

              <div
                key={p.id}
              >

                <ProductCard

                  product={p}

                  onDelete={
                    handleDelete
                  }

                />


                <button

                  onClick={() =>

                    handleUpdate(
                      p.id
                    )

                  }

                  className="
                  mt-2
                  bg-yellow-500
                  text-white
                  px-4
                  py-2
                  rounded
                  "
                >

                  Update

                </button>

              </div>

            )

          )

        }

      </div>

    </div>

  );

}