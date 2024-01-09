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
    <div className="product-view">
      <h1>{productDetails.title}</h1>
      <div className="product-details">
        <div className="product-info">
          <p>{productDetails.description}</p>
          <p>Price: ${productDetails.price}</p>
          <p>Category: {productDetails.category}</p>
        </div>
        <div className="image-container">
        <img src={productDetails.image} alt={productDetails.title} className="product-image"/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
