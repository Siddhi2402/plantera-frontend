import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/productCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product._id}`)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="price">₹{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
