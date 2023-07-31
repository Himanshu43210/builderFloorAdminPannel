import React from "react";
import Navbar from "../../components/adminPages/Navbar";
import Panel from "./Panel";
function Dashboard() {
  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "#f5f6f8" }}>
        <div className="abc" style={{ width: "200px" }}>
          <Panel />
        </div>

        <div style={{ border: "none", marginLeft: "10px", marginTop: "60px" }}>
          <div style={{ backgroundColor: "#f5f6f8" }}>
            <Navbar />
          </div>
        </div>
      </div>
      <p>Admin Dashboard</p>
    </div>
  );
}

export default Dashboard;
