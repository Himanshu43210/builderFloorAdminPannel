import React from "react";
import Navbar from "../../components/adminPages/Navbar";
import Panel from "./Panel";
function Dashboard() {
  return (
    <div>
          <div style={{ display: "flex" , backgroundColor:"#f8f4fc"}}>
          <div  className="abc" style={{ width: "200px" }}>
          <Panel />
     
          </div>

          <div

            style={{ border: "none", marginLeft: "10px", marginTop: "60px" }}
          >
          <div style={{ backgroundColor: "#f8f4fc" }}>
               <Navbar />
            </div>
            </div>   
              </div>   
      <p>Admin Dashboard</p>
    </div>
  );
}

export default Dashboard;
