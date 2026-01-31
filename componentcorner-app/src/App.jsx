import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

function App() {

  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Shoes", price: 60 },
    { id: 2, name: "Hat", price: 25 },
    { id: 3, name: "Jacket", price: 120 }
  ];

  // LOAD CART FROM LOCAL STORAGE
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // SAVE CART TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  return (
    <BrowserRouter>

      <Header cartCount={cart.length} />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
