import React from "react";
import useFetch from "../hooks/useFetch.js";
import HeartButton from "./HeartButton.js";
import ProductLink from "./ProductLink.js";

const ProductList = ({ selectedCategory }) => {
  const { data: products, loading, error } = useFetch(
    selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : "https://fakestoreapi.com/products"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
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
