import React from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import API_BASE_URL from "../services/api";

const products = {
  "1": {
    id: "1",
    name: "Plantera AQI Sensor Kit",
    price: 1999,
    desc:
      "The Plantera AQI Sensor Kit is a compact IoT solution designed to monitor air quality parameters such as particulate matter, temperature, and humidity in real time. It is ideal for students, researchers, and sustainability-driven smart city applications.",
    image: "/images/aq-kit.jpg",
  },
  "2": {
    id: "2",
    name: "Plantera VAYU – Smart Air Purifier",
    price: 4999,
    desc:
      "Plantera VAYU is an AI-powered smart air purifier that dynamically adapts to indoor pollution levels. Using intelligent sensing and automated filtration, it ensures optimal air quality while maintaining energy efficiency.",
    image: "/images/air-purifier.jpg",
  },
  "3": {
    id: "3",
    name: "Plantera Environment Monitor",
    price: 3499,
    desc:
      "The Plantera Environment Monitor is an advanced sensing system for tracking environmental and soil conditions, enabling data-driven decisions for agriculture, gardening, and environmental research.",
    image: "/images/garden-monitor.jpg",
  },
};



const ProductScreen = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products[id];

  if (!product) {
    return (
      <div style={{ padding: "60px" }}>
        <h2>Product not found</h2>
        <Link to="/">← Back to Store</Link>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      {/* BACK BUTTON */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <div
          style={backButtonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 10px 25px rgba(255,106,43,0.35)";
            e.currentTarget.style.transform = "translateX(-4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 6px 15px rgba(255,106,43,0.2)";
            e.currentTarget.style.transform = "translateX(0)";
          }}
        >
          ← Back to Store
        </div>
      </Link>

      {/* PRODUCT CARD */}
      <div
        style={cardStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.02)";
          e.currentTarget.style.boxShadow =
            "0 40px 80px rgba(255,106,43,0.25)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 25px 60px rgba(0,0,0,0.1)";
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={imageStyle}
        />

        <div style={infoStyle}>
          <h1 style={titleStyle}>{product.name}</h1>
          <p style={descStyle}>{product.desc}</p>

          <strong style={priceStyle}>{product.price}</strong>

          <button
            style={buttonStyle}
            onClick={() => addToCart(product, 1)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;

/* ===================== STYLES ===================== */

const pageStyle = {
  padding: "60px",
  maxWidth: "1100px",
  margin: "0 auto",
};

const cardStyle = {
  display: "flex",
  gap: "44px",
  padding: "42px",
  background: "white",
  borderRadius: "28px",
  boxShadow: "0 25px 60px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const imageStyle = {
  width: "340px",
  borderRadius: "20px",
  boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
};

const infoStyle = {
  flex: 1,
};

const titleStyle = {
  fontSize: "38px",
  color: "#ff6a2b",
  marginBottom: "16px",
  textShadow: `
    0 0 6px rgba(255,106,43,0.6),
    0 0 14px rgba(255,106,43,0.4)
  `,
};

const descStyle = {
  fontSize: "16px",
  lineHeight: "1.7",
  opacity: 0.88,
};

const priceStyle = {
  display: "block",
  marginTop: "22px",
  fontSize: "24px",
  color: "#1f7a3f",
};

const buttonStyle = {
  marginTop: "28px",
  padding: "16px 30px",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(135deg, #ff6a2b, #ff9f1c)",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 18px 36px rgba(255,106,43,0.45)",
};

const backButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "10px 18px",
  marginBottom: "32px",
  borderRadius: "999px",
  background: "rgba(255,106,43,0.08)",
  color: "#ff6a2b",
  fontWeight: "600",
  fontSize: "14px",
  cursor: "pointer",
  transition: "all 0.25s ease",
  boxShadow: "0 6px 15px rgba(255,106,43,0.2)",
};
