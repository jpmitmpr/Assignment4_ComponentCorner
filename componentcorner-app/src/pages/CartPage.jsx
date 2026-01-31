import CartItem from "../components/CartItem";

function CartPage({ cart, removeFromCart }) {
  return (
    <div className="cart">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
          />
        ))
      )}
    </div>
  );
}

export default CartPage;
