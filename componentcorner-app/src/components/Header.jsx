function Header({ cartCount }) {
  return (
    <header>
      <h1>ComponentCorner</h1>

      <div className="cart-container">
        🛒 <span className="cart-count">{cartCount}</span>
      </div>

    </header>
  );
}

export default Header;
