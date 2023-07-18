import React, { useState } from "react";
import ListingTable from "../reusables/ListingTable";
import { Card } from "react-bootstrap";
import "../css/AdminTable.css";
import { masterTableData } from "../toDelete/sampleMasterTableData";
import { newMasterConst } from "../fieldConsts/MasterFieldConst";
import TableButtonHeader from "./TableButtonHeader";

function MasterTable() {
  let tableData = [];
  const desktopHeaders = ["field", "value", "parentId"];
  const mobileHeaders = ["field", "value", "parentId"];
  const fieldConst = newMasterConst;
  masterTableData.map((element) => {
    element.value.map((value) => {
      tableData.push({
        masterId: element.id,
        field: element.field,
        value: value,
        parentId: element.parentId,
      });
    });
  });
  const handleSave = () => {
    console.log("On Save Click");
  };

  return (
    <>
      <Card className="admin-table-card">
        <Card.Header className="font">Master Details</Card.Header>
        <Card.Body>
          <TableButtonHeader fieldConst={fieldConst} tableData={tableData} />
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

export default MasterTable;
