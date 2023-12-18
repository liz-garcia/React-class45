import React from "react";
import fakeData from "../fake-data/all-products.js";
import "../App.css";

const ProductList = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? fakeData.filter((product) => product.category === selectedCategory)
    : fakeData;

  return (
    <div>
      <h2>Products</h2>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
              <p type="text" className="product-title">{product.title.replace(/^FAKE: /, "")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
