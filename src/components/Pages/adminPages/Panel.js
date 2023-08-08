import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardList, FaUsers, FaCog, FaUserShield } from "react-icons/fa";
function Panel() {
  return (
    <div>
      <div className="sidebarcontainer">
        <div className="panel-nav-link" id="sidebar">
          <Link to="./adminPages/AdminDashboard.js" className="panel-link">
            <FaClipboardList color="#4677c3 " /> &nbsp;
            <h6>Dashboard</h6>
          </Link>
          <Link to="./adminPages/UserTable.js" className="panel-link">
            <FaUsers color="#4677c3 " />
            &nbsp;
            <h6>User</h6>
          </Link>
          <Link to="./adminPages/PropertyTable.js" className="panel-link">
            <FaCog color="#4677c3 " />
            &nbsp;
            <h6>Property</h6>
          </Link>
          <Link to="./adminPages/MasterTable.js" className="panel-link">
            <FaUserShield color="#4677c3 " />
            &nbsp;
            <h6>Master</h6>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Panel;
