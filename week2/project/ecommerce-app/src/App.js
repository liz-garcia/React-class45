import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList.js";
import CategoryList from "./components/CategoryList.js";

function App() {
  const [selectedCategory, setSelectedCategory, setSelectedProduct] =
    useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setSelectedProduct={setSelectedProduct}
              />
            }
          />
          <Route
            path="/products"
            element={
              <Home
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setSelectedProduct={setSelectedProduct}
              />
            }
          />
          <Route
            path="/products/:category"
            element={<ProductList selectedCategory={selectedCategory} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

const Home = ({ selectedCategory, setSelectedCategory, setSelectedProduct }) => (
  <>
    <CategoryList
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
    <ProductList
      selectedCategory={selectedCategory}
      setSelectedProduct={setSelectedProduct}
    />
  </>
);

export default App;
