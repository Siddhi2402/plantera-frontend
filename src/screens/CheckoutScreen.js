import { useCart } from "../context/CartContext";
import API_BASE_URL from "../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CheckoutScreen = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = async () => {
    await fetch(`${API_BASE_URL}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartItems,
        address,
        totalPrice,
      }),
    });

    clearCart();
    navigate("/order-success");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Checkout</h2>

      <textarea
        placeholder="Enter delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ width: "100%", padding: "10px" }}
      />

      <h3>Total: ₹{totalPrice}</h3>

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default CheckoutScreen;
