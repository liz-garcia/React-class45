import React, { useEffect, useState } from "react";
import "../App.css";

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = selectedCategory
          ? `https://fakestoreapi.com/products/category/${selectedCategory}`
          : "https://fakestoreapi.com/products";
  
        const response = await fetch(url);
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    
    getProducts();
  
  }, [selectedCategory]);

  return (
    <div>
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
            <p type="text" className="product-title">
              {product.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
