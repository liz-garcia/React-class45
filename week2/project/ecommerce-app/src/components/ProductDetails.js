import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const details = await response.json();
        setProductDetails(details);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    getProductDetails();
  }, [id]);

  if (!productDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{productDetails.title}</h1>
      <p>{productDetails.description}</p>
      <img src={productDetails.image} alt={productDetails.title} />
      <p>Price: ${productDetails.price}</p>
      <p>Category: {productDetails.category}</p>
    </div>
  );
};

export default ProductDetails;
