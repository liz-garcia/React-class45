import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import ProductList from "./components/ProductList.js";
import ProductDetails from "./components/ProductDetails.js";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />
            <Route
              path="/products"
              element={
                <Home
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />
            <Route
              path="/products/:category"
              element={<ProductList selectedCategory={selectedCategory} />}
            />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
