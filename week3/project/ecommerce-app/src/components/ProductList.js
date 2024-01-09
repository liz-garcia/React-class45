import React, { useEffect, useState } from "react";
import HeartButton from "./HeartButton.js";
import ProductLink from "./ProductLink.js";

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = selectedCategory
          ? `https://fakestoreapi.com/products/category/${selectedCategory}`
          : "https://fakestoreapi.com/products";

        const response = await fetch(url);
        const fetchedProducts = await response.json();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [selectedCategory]);

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} id={product.id}>
            <HeartButton productId={product.id} />
            <ProductLink productItem={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
