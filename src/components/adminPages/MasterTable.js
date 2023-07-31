import React, { useEffect } from "react";
import ListingTable from "../utils/ListingTable";
import { Card } from "react-bootstrap";
import "../css/AdminTable.css";
import { newMasterConst } from "../fieldConsts/MasterFieldConst";
import TableButtonHeader from "./TableButtonHeader";
import Navbar from "../../components/adminPages/Navbar";
import Panel from "./Panel";
import {
  ALTER_MASTER_DATA,
  DELETE_MASTER_DATA,
  GET,
  GET_MASTER_DATA,
} from "../utils/Const";
import AutoFetchApi from "../customComponents/AutoFetchApi";
import { API_ENDPOINTS } from "../../redux/utils/api";
import { useSelector } from "react-redux";
import { selectApiData } from "../../redux/utils/apiSelector";

function MasterTable() {
  let tableData = [];
  const desktopHeaders = ["field", "value", "parentId"];
  const mobileHeaders = ["field", "value", "parentId"];
  const fieldConst = newMasterConst;
  const dataToRender = useSelector((state) =>
    selectApiData(state, GET_MASTER_DATA)
  );

  dataToRender?.data?.map((element) => {
    element.value.map((value) => {
      tableData.push({
        masterId: element.id,
        field: element.field,
        value: value,
        parentId: element.parentId,
      });
    });
  });
  return (
    <>
      {!dataToRender && (
        <AutoFetchApi url={API_ENDPOINTS[GET_MASTER_DATA]} method={GET} />
      )}
      <div style={{ display: "flex", backgroundColor: "#f8f4fc" }}>
        <div className="abc" style={{ width: "200px" }}>
          <Panel />
        </div>

        <div style={{ border: "none", marginLeft: "10px", marginTop: "60px" }}>
          <div style={{ backgroundColor: "#f8f4fc" }}>
            <Navbar />
            <Card style={{ backgroundColor: "#f6f7fc", border: "none" }}>
              <Card.Header
                className="font"
                style={{ backgroundColor: "#f6f7fc", border: "none" }}
              >
                Master Details
              </Card.Header>
              <Card.Body
                style={{ backgroundColor: "#f6f7fc", padding: "20px" }}
              >
                <TableButtonHeader
                  fieldConst={fieldConst}
                  tableData={tableData}
                  saveDataApi={ALTER_MASTER_DATA}
                />
                <ListingTable
                  data={tableData}
                  headersDesktop={desktopHeaders}
                  headersMobile={mobileHeaders}
                  fieldConst={fieldConst}
                  editApi={ALTER_MASTER_DATA}
                  deleteApi={DELETE_MASTER_DATA}
                  getDataApi={GET_MASTER_DATA}
                  itemCount={dataToRender?.itemCount}
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
