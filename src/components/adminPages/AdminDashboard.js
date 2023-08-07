import React from "react";
import Navbar from "../../components/adminPages/Navbar";
import Panel from "./Panel";
function Dashboard() {
  return (
    <div>
      <div>
        <div className="admin-dashboard-home">
          <Panel />
        </div>
        <div>
          <div>
            <Navbar />
          </div>
        </div>
      </div>
      <p>Admin Dashboard</p>
    </div>
  );
}

export default Dashboard;
