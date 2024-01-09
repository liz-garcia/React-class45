import React, { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext.js";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";

const HeartButton = ({ productId }) => {
  const { favoriteIds, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  return (
    <>
      <img
        src={favoriteIds.includes(productId) ? heartSolid : heartRegular}
        alt={favoriteIds.includes(productId) ? "Favorited" : "Not Favorited"}
        className="heart-icon"
        onClick={() => {
          if (favoriteIds.includes(productId)) {
            removeFromFavorites(productId);
          } else {
            addToFavorites(productId);
          }
        }}
      />
    </>
  );
};

export default HeartButton;
