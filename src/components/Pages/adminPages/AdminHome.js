import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import Panel from "./Panel";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { BF_ADMIN } from "../../utils/Const";
import { USER_ROLE } from "../../../ScreenJson";
import PageSelector from "../../customComponents/PageSelector";

export default function AdminHome() {
  const userProfile = useSelector((state) => state.profile);
  const [showMenu, setShowMenu] = useState(true);
  const [currentPage, setCurrentPage] = useState(true);

  return (
    <>
      <div>
        <Button
          className="admin-menu-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          <GiHamburgerMenu />
        </Button>
        <Navbar />
      </div>
      <div>
        {showMenu && (
          <div className="admin-dashboard-home">
            <Panel
              isSuperAdmin={userProfile?.role === USER_ROLE[BF_ADMIN]}
              handlePageClick={(page) => {
                setCurrentPage(page);
              }}
            />
          </div>
        )}
        <div>
          <PageSelector pageName={currentPage} />
        </div>
      </div>
    </>
  );
}
