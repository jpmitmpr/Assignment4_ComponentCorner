import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <nav>

      <h2>My Store</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/cart">
            Cart ({cartCount})
          </Link>
        </li>
      </ul>

    </nav>
  );
}

export default Header;
