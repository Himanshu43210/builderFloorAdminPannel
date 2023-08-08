import React from "react";
import { FaClipboardList, FaUsers, FaCog, FaUserShield } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import {
  ADMIN_DASHBOARD,
  MASTER_MANAGEMENT,
  PROPERTY_MANAGEMENT,
  USER_MANAGEMENT,
} from "../../utils/Const";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function Panel({ isSuperAdmin, handlePageClick }) {
  return (
    <div>
      <div className="sidebarcontainer">
        <div className="panel-nav-link" id="sidebar">
          <Link to="/" className="panel-link">
            <AiFillHome className="admin-panel-icons" /> &nbsp;
            <h6>BuilderFloor</h6>
          </Link>
          <Button
            onClick={() => handlePageClick(ADMIN_DASHBOARD)}
            className="panel-link"
          >
            <FaClipboardList className="admin-panel-icons" /> &nbsp;
            <h6>Dashboard</h6>
          </Button>
          {isSuperAdmin && (
            <>
              <Button
                onClick={() => handlePageClick(USER_MANAGEMENT)}
                className="panel-link"
              >
                <FaUsers className="admin-panel-icons" />
                <h6>User</h6>
              </Button>
              <Button
                onClick={() => handlePageClick(MASTER_MANAGEMENT)}
                className="panel-link"
              >
                <FaUserShield className="admin-panel-icons" />
                <h6>Master</h6>
              </Button>
            </>
          )}
          <Button
            onClick={() => handlePageClick(PROPERTY_MANAGEMENT)}
            className="panel-link"
          >
            <FaCog className="admin-panel-icons" />
            <h6>Property</h6>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Panel;
