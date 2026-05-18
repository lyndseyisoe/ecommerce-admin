import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "15px", padding: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}