import React, { useState } from "react";
import FavoritesContext from "./FavoritesContext.js";

const FavoritesProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const addToFavorites = (productId) => {
    setFavoriteIds((prevIds) => [...prevIds, productId]);
  };

  const removeFromFavorites = (productId) => {
    setFavoriteIds((prevIds) => prevIds.filter((id) => id !== productId));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
