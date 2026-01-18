import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useCart();

  return (
    <div style={headerStyle}>
      {/* LOGO */}
      <Link to="/" style={logoStyle}>
        Plantera
      </Link>

      {/* CART */}
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <div style={cartWrapperStyle}>
          🛒 Cart
          {cartItems.length > 0 && (
            <span style={badgeStyle}>{cartItems.length}</span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Header;

/* ===== styles ===== */

const headerStyle = {
  position: "sticky",
  top: 0,
  zIndex: 100,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 40px",
  background: "white",
  boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
};

const logoStyle = {
  fontSize: "22px",
  fontWeight: "bold",
  color: "#ff6a2b",
  textDecoration: "none",
  textShadow: "0 0 6px rgba(255,106,43,0.5)",
};

const cartWrapperStyle = {
  position: "relative",
  padding: "8px 16px",
  borderRadius: "999px",
  background: "rgba(255,106,43,0.1)",
  color: "#ff6a2b",
  fontWeight: "600",
};

const badgeStyle = {
  position: "absolute",
  top: "-6px",
  right: "-6px",
  background: "#ff6a2b",
  color: "white",
  fontSize: "12px",
  fontWeight: "bold",
  padding: "4px 8px",
  borderRadius: "999px",
};
