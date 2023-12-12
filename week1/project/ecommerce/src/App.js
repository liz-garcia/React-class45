import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList.js";
import CategoryList from "./components/CategoryList.js";

function App() {
  const [selectedCategory, setSelectedCategory, setSelectedProduct] =
    useState(null);

  return (
    <div className="App">
      <CategoryList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList
        selectedCategory={selectedCategory}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
}

export default App;
