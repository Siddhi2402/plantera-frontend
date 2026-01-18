import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        {/* ✅ ANIMATED CHECK */}
        <div style={checkWrapper}>
          <svg width="80" height="80" viewBox="0 0 52 52" style={checkSvg}>
            <circle
              cx="26"
              cy="26"
              r="25"
              fill="none"
              style={circleStyle}
            />
            <path
              fill="none"
              d="M14 27 l7 7 l17 -17"
              style={tickStyle}
            />
          </svg>
        </div>

        <h1 style={titleStyle}>Order Placed Successfully</h1>

        <p style={textStyle}>
          Thank you for choosing <strong>Plantera</strong> 🌱  
          Your order has been confirmed and is being prepared.
        </p>

        <p style={subTextStyle}>
          A confirmation email will be sent shortly.
        </p>

        <div style={actionsStyle}>
          <Link to="/" style={primaryBtn}>
            Back to Store
          </Link>
          <Link to="/cart" style={secondaryBtn}>
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;

/* ===================== STYLES ===================== */

const pageStyle = {
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(180deg, #fff, #fff7f2)",
};

const cardStyle = {
  background: "white",
  padding: "50px",
  borderRadius: "28px",
  maxWidth: "520px",
  textAlign: "center",
  boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
};

const checkWrapper = {
  width: "100px",
  height: "100px",
  margin: "0 auto 24px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #ff6a2b, #ff9f1c)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 30px rgba(255,106,43,0.6)",
  animation: "pop 0.6s ease-out forwards",
};

const checkSvg = {
  stroke: "white",
  strokeWidth: 4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const circleStyle = {
  strokeDasharray: 157,
  strokeDashoffset: 157,
  animation: "circleDraw 0.6s ease-out forwards",
};

const tickStyle = {
  strokeDasharray: 48,
  strokeDashoffset: 48,
  animation: "tickDraw 0.4s ease-out 0.5s forwards",
};

const titleStyle = {
  color: "#ff6a2b",
  marginBottom: "16px",
  textShadow: "0 0 6px rgba(255,106,43,0.4)",
};

const textStyle = {
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "10px",
};

const subTextStyle = {
  fontSize: "14px",
  opacity: 0.7,
  marginBottom: "30px",
};

const actionsStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "16px",
};

const primaryBtn = {
  padding: "14px 26px",
  borderRadius: "12px",
  background: "linear-gradient(135deg, #ff6a2b, #ff9f1c)",
  color: "white",
  fontWeight: "bold",
  textDecoration: "none",
  boxShadow: "0 15px 30px rgba(255,106,43,0.4)",
};

const secondaryBtn = {
  padding: "14px 26px",
  borderRadius: "12px",
  background: "rgba(255,106,43,0.1)",
  color: "#ff6a2b",
  fontWeight: "bold",
  textDecoration: "none",
};
