import React, { useContext, useEffect, useState } from "react";
import FavoritesContext from "../context/FavoritesContext.js";
import HeartButton from "./HeartButton.js";
import ProductLink from "./ProductLink.js";

const FavoritesPage = () => {
  const { favoriteIds } = useContext(FavoritesContext);
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
    <div className="favorites">
      <h2>Your Favorites</h2>
      <ul className="product-list">
        {favoriteProducts.map((product) => (
          <li key={product.id} id={product.id}>
            <HeartButton productId={product.id}/>
            <ProductLink productItem={product}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
