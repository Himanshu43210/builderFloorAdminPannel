import React from "react";
import ListingTable from "../utils/ListingTable";
import { Card } from "react-bootstrap";
import "../css/AdminTable.css";
import { masterTableData } from "../externalDataForTesting/sampleMasterTableData";
import { newMasterConst } from "../fieldConsts/MasterFieldConst";
import TableButtonHeader from "./TableButtonHeader";
import Navbar from "../../components/adminPages/Navbar";
import Panel from "./Panel";

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
                Master Details
              </Card.Header>
              <Card.Body
                style={{ backgroundColor: "#f5f6f8  ", padding: "20px" }}
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

export default MasterTable;
