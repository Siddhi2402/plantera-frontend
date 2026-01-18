import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "1",
    name: "Plantera AQI Sensor Kit",
    price: "₹1999",
    desc: "DIY IoT kit to monitor air quality in real time.",
    image: "/images/aq-kit.jpg",
  },
  {
    id: "2",
    name: "Plantera VAYU – Air Purifier",
    price: "₹4999",
    desc: "AI-powered smart air purifier for homes & offices.",
    image: "/images/air-purifier.jpg",
  },
  {
    id: "3",
    name: "Plantera Environment Monitor",
    price: "₹3499",
    desc: "Advanced environment & soil monitoring system.",
    image: "/images/garden-monitor.jpg",
  },
];

const HomeScreen = () => {
  return (
    <div style={pageStyle}>
      {/* GLOWY TITLE */}
      <h1 style={titleStyle}>Plantera Store</h1>
      <p style={subtitleStyle}>
        Sustainable. Smart. Sensor-driven. 🌱
      </p>

      {/* PRODUCT LIST */}
      <div style={{ marginTop: "60px" }}>
        {products.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            style={{ textDecoration: "none" }}
          >
            {/* WRAPPER = FULL HOVER AREA */}
            <div
              style={cardWrapperStyle}
              onMouseEnter={(e) => {
                const card = e.currentTarget.firstChild;
                card.style.transform =
                  "rotateX(6deg) rotateY(-6deg) scale(1.04)";
                card.style.boxShadow =
                  "0 45px 90px rgba(255,106,43,0.35)";
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget.firstChild;
                card.style.transform =
                  "rotateX(0deg) rotateY(0deg) scale(1)";
                card.style.boxShadow =
                  "0 25px 60px rgba(0,0,0,0.1)";
              }}
            >
              {/* ACTUAL CARD */}
              <div style={cardStyle}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={imageStyle}
                />

                <div style={infoStyle}>
                  <h2 style={productTitleStyle}>{p.name}</h2>
                  <p style={descStyle}>{p.desc}</p>
                  <strong style={priceStyle}>{p.price}</strong>
                  <div style={ctaStyle}>View Product →</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;

/* ===================== STYLES ===================== */

const pageStyle = {
  padding: "60px",
  maxWidth: "1100px",
  margin: "0 auto",
};

const titleStyle = {
  fontSize: "44px",
  color: "#ff6a2b",
  marginBottom: "12px",
  textShadow: `
    0 0 6px rgba(255,106,43,0.6),
    0 0 14px rgba(255,106,43,0.5),
    0 0 30px rgba(255,159,28,0.4)
  `,
};

const subtitleStyle = {
  fontSize: "18px",
  opacity: 0.85,
};

const cardWrapperStyle = {
  perspective: "1400px",
  marginBottom: "36px",
};

const cardStyle = {
  display: "flex",
  alignItems: "center",
  gap: "32px",
  padding: "28px",
  background: "white",
  borderRadius: "22px",
  boxShadow: "0 25px 60px rgba(0,0,0,0.1)",
  transition: "transform 0.45s ease, box-shadow 0.45s ease",
  transformStyle: "preserve-3d",
  willChange: "transform",
};

const imageStyle = {
  width: "220px",
  borderRadius: "16px",
  boxShadow: "0 20px 45px rgba(0,0,0,0.2)",
  transform: "translateZ(40px)",
};

const infoStyle = {
  flex: 1,
};

const productTitleStyle = {
  marginBottom: "10px",
  color: "#1f2937",
};

const descStyle = {
  opacity: 0.85,
  lineHeight: "1.5",
};

const priceStyle = {
  display: "block",
  marginTop: "14px",
  fontSize: "20px",
  color: "#1f7a3f",
};

const ctaStyle = {
  marginTop: "16px",
  fontWeight: "bold",
  color: "#ff6a2b",
};
