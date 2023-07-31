import React from "react";
import ListingTable from "../utils/ListingTable";
import { userTableData } from "../externalDataForTesting/sampleUserTableData";
import { newUserConst } from "../fieldConsts/UserFieldConst";
import { Card } from "react-bootstrap";
import "../css/AdminTable.css";
import Panel from "./Panel";
import Navbar from "./Navbar";
import TableButtonHeader from "./TableButtonHeader";

function PropertyTable() {
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

  return (
    <>
      <div style={{ display: "flex", backgroundColor: "#f5f6f8" }}>
        <div className="abc" style={{ width: "200px" }}>
          <Panel />
        </div>

        <div style={{ border: "none", marginLeft: "10px", marginTop: "60px" }}>
          <div style={{ backgroundColor: "#f5f6f8" }}>
            <Navbar />
            <Card style={{ backgroundColor: "#f5f6f8", border: "none" }}>
              <Card.Header
                className="font"
                style={{ backgroundColor: "#f5f6f8", border: "none" }}
              >
                User Details
              </Card.Header>
              <Card.Body
                style={{ backgroundColor: "#f5f6f8", padding: "20px" }}
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

export default PropertyTable;
