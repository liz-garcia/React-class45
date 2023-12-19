import React, { useEffect, useState } from "react";
import "../App.css";

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      const categories = await response.json();
      setCategories(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => { getCategories(); }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={category === selectedCategory ? "selected" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
