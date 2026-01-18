import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CheckoutScreen = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      alert("Please fill all details");
      return;
    }

    const newOrder = {
      id: Date.now(),
      customer: form,
      items: cartItems,
      total: totalPrice,
      status: "Ordered",
      createdAt: new Date().toLocaleString(),
    };

    const existingOrders =
      JSON.parse(localStorage.getItem("plantera_orders")) || [];

    localStorage.setItem(
      "plantera_orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    navigate("/order-success");
  };

  // ✅ THIS RETURN IS INSIDE THE FUNCTION (IMPORTANT)
  if (cartItems.length === 0) {
    return (
      <div style={pageStyle}>
        <h2>No items to checkout</h2>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Checkout</h1>

      <form onSubmit={placeOrder} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          style={textareaStyle}
        />

        <button type="submit" style={orderBtn}>
          Place Order • ₹{totalPrice}
        </button>
      </form>

      <div style={summaryStyle}>
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <p key={item.id}>
            {item.name} × {item.qty}
          </p>
        ))}
        <strong>Total: ₹{totalPrice}</strong>
      </div>
    </div>
  );
};

export default CheckoutScreen;

/* ================= STYLES ================= */

const pageStyle = {
  padding: "60px",
  maxWidth: "900px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "40px",
};

const titleStyle = {
  gridColumn: "1 / -1",
  color: "#ff6a2b",
};

const formStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "20px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const inputStyle = {
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #ddd",
};

const textareaStyle = {
  ...inputStyle,
  minHeight: "100px",
};

const orderBtn = {
  padding: "16px",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(135deg, #ff6a2b, #ff9f1c)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

const summaryStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "20px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
};
