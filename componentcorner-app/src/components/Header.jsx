import "./Header.css";

function Header({ storeName }) {
  return (
    <header className="header">
      <h1>{storeName}</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
