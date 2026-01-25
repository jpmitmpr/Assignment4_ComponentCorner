import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";

function App() {

  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://placehold.co/600x400", description: "Premium noise-cancelling headphones" },
    { id: 2, name: "Smart Watch", price: 249.99, image: "https://placehold.co/600x400", description: "Fitness tracker with GPS" },
    { id: 3, name: "Bluetooth Speaker", price: 79.99, image: "https://placehold.co/600x400", description: "Portable waterproof speaker" },
    { id: 4, name: "Laptop Stand", price: 49.99, image: "https://placehold.co/600x400", description: "Ergonomic aluminum stand" },
    { id: 5, name: "Webcam", price: 129.99, image: "https://placehold.co/600x400", description: "4K webcam" },
    { id: 6, name: "Mechanical Keyboard", price: 159.99, image: "https://placehold.co/600x400", description: "RGB keyboard" }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="App">

      <Header cartCount={cart.length} />

      <h1>Products</h1>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeFromCart}
            />
          ))}

          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}

    </div>
  );
}

export default App;
