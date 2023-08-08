import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { BsMenuButtonWide } from "react-icons/bs";
import Panel from "./Panel";
import Navbar from "./Navbar";

export default function AdminDashboard() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Button
        className="admin-menu-button"
        onClick={() => setShowMenu(!showMenu)}
      >
        <BsMenuButtonWide />
      </Button>
      <div>
        {showMenu && (
          <div className="admin-dashboard-home">
            <Panel />
          </div>
        )}
        <div>
          <div>
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}
