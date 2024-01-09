import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList.js";
import CategoryList from "./components/CategoryList.js";
import ProductDetails from "./components/ProductDetails.js";
import FavoritesPage from "./components/FavoritesPage.js";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Router>
        <div className="App">
          <div id="navigation">
            <Link to="/products" className="navigation-item">
              All Products
            </Link>
            <Link to="/favorites" className="navigation-item">
              Favorites
            </Link>
          </div>
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
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

const Home = ({ selectedCategory, setSelectedCategory }) => (
  <>
    <h2>Categories</h2>
    <CategoryList
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
    <h2>Products</h2>
    <ProductList selectedCategory={selectedCategory} />
  </>
);

export default App;
