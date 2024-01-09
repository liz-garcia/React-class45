import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext.js";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import "../App.css";

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  const { favoriteIds, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

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
          <li key={product.id} id={product.id}>
            <img
              src={
                favoriteIds.includes(product.id) ? 
                heartSolid : heartRegular}
              alt={
                favoriteIds.includes(product.id) ? 
                "Favorited" : "Not Favorited"
              }
              className="heart-icon"
              onClick={() => {
                if (favoriteIds.includes(product.id)) {
                  removeFromFavorites(product.id);
                } else {
                  addToFavorites(product.id);
                }
              }}
            />
            <Link to={`/product/${product.id}`}>
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <p className="product-title">{product.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
