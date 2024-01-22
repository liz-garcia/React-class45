import React from "react";
import CategoryList from "./CategoryList.js";
import ProductList from "./ProductList.js";

const Home = ({ selectedCategory, setSelectedCategory }) => (
  <>
    <CategoryList
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
    <ProductList selectedCategory={selectedCategory} />
  </>
);

export default Home;
