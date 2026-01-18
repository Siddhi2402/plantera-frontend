import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderSuccess from "./screens/OrderSuccess";
import AdminScreen from "./screens/AdminScreen";

const Layout = () => {
  const location = useLocation();

  // ❌ Hide header on admin page
  const hideHeader = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/admin" element={<AdminScreen />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
