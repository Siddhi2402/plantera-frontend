import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartScreen = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div style={pageStyle}>
        <h2>Your cart is empty 🛒</h2>
        <Link to="/" style={emptyLinkStyle}>
          ← Go back to store
        </Link>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Your Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} style={itemStyle}>
          <img src={item.image} alt={item.name} style={imageStyle} />

          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            <p style={{ opacity: 0.7 }}>₹{item.price}</p>

            <div style={qtyStyle}>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <strong>₹{item.price * item.qty}</strong>
            <br />
            <button
              onClick={() => removeFromCart(item.id)}
              style={removeBtn}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div style={summaryStyle}>
        <h2>Total: ₹{totalPrice}</h2>
        <button
          style={checkoutBtn}
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout →
        </button>
      </div>
    </div>
  );
};

export default CartScreen;

/* ===================== STYLES ===================== */

const pageStyle = {
  padding: "60px",
  maxWidth: "900px",
  margin: "0 auto",
};

const titleStyle = {
  color: "#ff6a2b",
  marginBottom: "30px",
  textShadow: "0 0 6px rgba(255,106,43,0.4)",
};

const itemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "20px",
  marginBottom: "20px",
  background: "white",
  borderRadius: "18px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
};

const imageStyle = {
  width: "120px",
  borderRadius: "12px",
};

const qtyStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "10px",
};

const summaryStyle = {
  marginTop: "40px",
  padding: "30px",
  background: "white",
  borderRadius: "20px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const checkoutBtn = {
  padding: "14px 28px",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(135deg, #ff6a2b, #ff9f1c)",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 15px 30px rgba(255,106,43,0.4)",
};

const removeBtn = {
  background: "none",
  border: "none",
  color: "#ff6a2b",
  cursor: "pointer",
  marginTop: "6px",
};

const emptyLinkStyle = {
  display: "inline-block",
  marginTop: "20px",
  color: "#ff6a2b",
  textDecoration: "none",
};
