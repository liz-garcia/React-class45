import React, { useContext, useEffect, useState } from "react";
import FavoritesContext from "../context/FavoritesContext.js";
import { Link } from "react-router-dom";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";

const FavoritesPage = () => {
  const { favoriteIds, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      const promises = favoriteIds.map(async (productId) => {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const favoriteProduct = await response.json();
        return favoriteProduct;
      });

      const products = await Promise.all(promises);
      setFavoriteProducts(products);
    };

    fetchFavoriteProducts();
  }, [favoriteIds]);

  if (!favoriteProducts.length) {
    return (
        <div id="favorites">
            <h2>Your Favorites</h2>
            <p>You haven't chosen any favorites yet!</p>
        </div>);
  }

  return (
    <div id="favorites">
      <h2>Favorites</h2>
      <ul className="product-list">
        {favoriteProducts.map((product) => (
          <li key={product.id} id={product.id}>
            <img
              src={favoriteIds.includes(product.id) ? heartSolid : heartRegular}
              alt={
                favoriteIds.includes(product.id) ? "Favorited" : "Not Favorited"
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

export default FavoritesPage;
