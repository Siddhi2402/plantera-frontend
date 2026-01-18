import { useState } from "react";
import "../styles/orders.css";

export default function MyOrders() {
  const [email,setEmail]=useState("");
  const [orders,setOrders]=useState([]);

  const fetchOrders=async()=>{
    const res=await fetch(`http://localhost:5000/api/orders/user/${email}`);
    setOrders(await res.json());
  };

  return (
    <div className="orders">
      <input placeholder="Enter email" onChange={e=>setEmail(e.target.value)}/>
      <button onClick={fetchOrders}>Track</button>

      {orders.map(o=>(
        <div className={`order ${o.status}`} key={o._id}>
          <strong>Status: {o.status}</strong>
          <p>Total: ₹{o.total}</p>
        </div>
      ))}
    </div>
  );
}
