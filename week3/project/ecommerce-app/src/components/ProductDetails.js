import React from "react";
import useFetch from "../hooks/useFetch.js";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const { data: productDetails, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching product details: {error.message}</p>;
  }

  return (
    <div className="product-view">
      <h1>{productDetails.title}</h1>
      <div className="product-details">
        <div className="product-info">
          <p>{productDetails.description}</p>
          <p>Price: ${productDetails.price}</p>
          <p>Category: {productDetails.category}</p>
        </div>
        <div className="image-container">
          <img
            src={productDetails.image}
            alt={productDetails.title}
            className="product-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
