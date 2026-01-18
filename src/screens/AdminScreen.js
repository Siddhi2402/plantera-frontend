import React, { useEffect, useState } from "react";

const AdminScreen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("plantera_orders")) || [];
    setOrders(stored);
  }, []);

  const updateStatus = (id, status) => {
    const updated = orders.map((o) =>
      o.id === id ? { ...o, status } : o
    );
    setOrders(updated);
    localStorage.setItem("plantera_orders", JSON.stringify(updated));
  };

  return (
    <div style={page}>
      <h1 style={title}>Admin Orders Dashboard</h1>

      <div style={tableWrapper}>
        <table style={table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Address</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>

            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer.name}</td>
                <td>{order.customer.email}</td>
                <td style={{ maxWidth: "220px", fontSize: "13px", opacity: 0.85 }}>
                  {order.customer.address}
                </td>


                <td>
                  {order.items.map((i) => (
                    <div key={i.id}>
                      {i.name} × {i.qty}
                    </div>
                  ))}
                </td>
                <td>₹{order.total}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateStatus(order.id, e.target.value)
                    }
                    style={select}
                  >
                    <option>Ordered</option>
                    <option>Dispatched</option>
                    <option>Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminScreen;

/* ================= STYLES ================= */

const page = {
  minHeight: "100vh",
  padding: "50px",
  background: "linear-gradient(120deg, #fff, #fff7f0)",
};

const title = {
  marginBottom: "30px",
  color: "#ff6a2b",
  textShadow: "0 0 6px rgba(255,106,43,0.4)",
};

const tableWrapper = {
  background: "white",
  borderRadius: "20px",
  boxShadow: "0 30px 70px rgba(0,0,0,0.12)",
  overflowX: "auto",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const select = {
  padding: "8px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  cursor: "pointer",
};









