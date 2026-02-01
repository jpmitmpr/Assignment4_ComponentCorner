import React from 'react';
import CartItem from '../components/CartItem';

const CartPage = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;
