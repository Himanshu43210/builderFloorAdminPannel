import React from "react";
import ListingTable from "../utils/ListingTable";
import { userTableData } from "../externalDataForTesting/sampleUserTableData";
import { newUserConst } from "../fieldConsts/UserFieldConst";
import { Card } from "react-bootstrap";
import "../css/AdminTable.css";

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
      <Card className="admin-table-card">
        <Card.Header className="font">User Details</Card.Header>
        <Card.Body>
          <ListingTable
            data={tableData}
            headersDesktop={desktopHeaders}
            headersMobile={mobileHeaders}
            fieldConst={fieldConst}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default PropertyTable;
