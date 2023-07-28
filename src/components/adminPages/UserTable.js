import React, { useState } from "react";
import ListingTable from "../utils/ListingTable";
import { userTableData } from "../externalDataForTesting/sampleUserTableData";
import { newUserConst } from "../fieldConsts/UserFieldConst";
import { Card } from "react-bootstrap";
import "../css/AdminTable.css";
import TableButtonHeader from "./TableButtonHeader";
import Navbar from "./Navbar";
import Panel from "./Panel";

function UserTable() {
  const tableData = userTableData;
  const desktopHeaders = [
    "name",
    "PhoneNumber",
    "address",
    "email",
    "password",
    "role",
  ];
  const mobileHeaders = ["name", "role"];
  const fieldConst = newUserConst;

  const handleSave = () => {
    console.log("On Save Click");
  };

  return (
    <>
      
        <div style={{ display: "flex" , backgroundColor:"#f8f4fc"}}>
          <div  className="abc" style={{ width: "200px" }}>
          <Panel />
     
          </div>

          <div

            style={{ border: "none", marginLeft: "10px", marginTop: "60px" }}
          >
          <div style={{ backgroundColor: "#f8f4fc" }}>
               <Navbar />
            <Card style={{ backgroundColor: "#f8f4fc", border: "none" }}>
              <Card.Header
                className="font"
                style={{ backgroundColor: "#f8f4fc", border: "none" }}
              >
                User Details
              </Card.Header>
              <Card.Body
                style={{ backgroundColor: "#f8f4fc", padding: "20px" }}
              >
                <TableButtonHeader
                  fieldConst={fieldConst}
                  tableData={tableData}
                />
                <ListingTable
                  data={tableData}
                  headersDesktop={desktopHeaders}
                  headersMobile={mobileHeaders}
                  fieldConst={fieldConst}
                />
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserTable;
