import React, { useState } from "react";
import ListingTable from "../reusables/ListingTable";
import { userTableData } from "../toDelete/sampleUserTableData";
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

  const handleSave = () => {
    console.log("On Save Click");
  };

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
