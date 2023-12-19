import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div>
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
