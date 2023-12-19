import React from "react";
import fakeData from "../fake-data/all-products.js";
import "../App.css";

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };
  

  return (
    <div>
      <h2>Categories</h2>
      <ul className="category-list">
        {Array.from(new Set(fakeData.map((product) => product.category))).map(
          (category) => (
            <li
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={
                category === selectedCategory ? "selected" : ""
              }
            >
              {category}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CategoryList;
