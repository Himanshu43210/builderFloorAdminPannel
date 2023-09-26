import React from "react";
import { FaClipboardList, FaUsers, FaCog, FaUserShield } from "react-icons/fa";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import {
  ADMIN_DASHBOARD,
  MASTER_MANAGEMENT,
  PROPERTY_MANAGEMENT,
  USER_MANAGEMENT,
} from "./Const";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { resetApiStatus } from "../../redux/slice/apiSlice";

const PanelChild = ({ icon, title }) => {
  return (
    <div className="panel-link-child">
      {icon} &nbsp;
      <h1>{title}</h1>
    </div>
  );
};

function Panel({ nonSalesUser, handlePageClick, onLogoutClick }) {
  const dispatch = useDispatch();
  return (
    <>
      {/* <div>
      <div className="sidebarcontainer"> */}
      <div className="panel-nav-link" id="sidebar">
        {/* <Link to="/" className="panel-link">
            <AiFillHome className="admin-panel-icons" /> &nbsp;
            <h6>BuilderFloor</h6>
          </Link> */}
        <PanelChild icon={<AiFillHome className="admin-panel-icons" />} />
        {/* <a
          href="https://www.builderfloor.com"
          className="panel-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillHome className="admin-panel-icons" /> &nbsp;
          <h6>BuilderFloor</h6>
        </a> */}
        <Button
          onClick={() => handlePageClick(ADMIN_DASHBOARD)}
          className="panel-link"
        >
          <FaClipboardList className="admin-panel-icons" /> &nbsp;
          <h6>Dashboard</h6>
        </Button>
        <>
          {nonSalesUser && (
            <>
              <Button
                onClick={() => handlePageClick(USER_MANAGEMENT)}
                className="panel-link"
              >
                <FaUsers className="admin-panel-icons" />
                <h6>User</h6>
              </Button>

              {/* <Button
                  onClick={() => handlePageClick(MASTER_MANAGEMENT)}
                  className="panel-link"
                >
                  <FaUserShield className="admin-panel-icons" />
                  <h6>Master</h6>
                </Button> */}
            </>
          )}
        </>
        <Button
          onClick={() => handlePageClick(PROPERTY_MANAGEMENT)}
          className="panel-link"
        >
          <FaCog className="admin-panel-icons" />
          <h6>Property</h6>
        </Button>
        <Button
          onClick={() => {
            dispatch(resetApiStatus(onLogoutClick));
            localStorage.removeItem("email");
            localStorage.removeItem("login");
          }}
          className="panel-link"
        >
          <AiOutlineLogout className="admin-panel-icons" />
          <h6>Logout</h6>
        </Button>
      </div>
      {/* </div>
    </div> */}
    </>
  );
}

export default Panel;
