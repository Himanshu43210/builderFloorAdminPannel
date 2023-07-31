import React, { useEffect } from "react";
import ListingTable from "../utils/ListingTable";
import { Card } from "react-bootstrap";
import "../css/AdminTable.css";
import Panel from "./Panel";
import Navbar from "./Navbar";
import TableButtonHeader from "./TableButtonHeader";
import { newPropertyConst } from "../fieldConsts/PropertiesFieldConst";
import {
  ALTER_PROPERTY_DATA,
  DELETE_PROPERTY_DATA,
  GET,
  GET_PROPERTY_DATA,
} from "../utils/Const";
import { useSelector } from "react-redux";
import AutoFetchApi from "../customComponents/AutoFetchApi";
import { API_ENDPOINTS } from "../../redux/utils/api";
import { selectApiData } from "../../redux/utils/apiSelector";
import _ from "lodash";

function PropertyTable() {
  const desktopHeaders = [
    "title",
    "accommodation",
    "possession",
    "sectorNumber",
    "facing",
    "builderName",
    "channelPartner",
  ];
  const mobileHeaders = ["name", "role"];
  const fieldConst = newPropertyConst;
  const tableData = useSelector((state) =>
    selectApiData(state, GET_PROPERTY_DATA)
  );

  return (
    <>
      {!tableData && (
        <AutoFetchApi url={API_ENDPOINTS[GET_PROPERTY_DATA]} method={GET} />
      )}
      <div style={{ display: "flex", backgroundColor: "##f5f6f8" }}>
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
                Property Details
              </Card.Header>
              <Card.Body
                style={{ backgroundColor: "#f5f6f8", padding: "20px" }}
              >
                <TableButtonHeader
                  fieldConst={fieldConst}
                  tableData={_.cloneDeep(tableData?.data || [])}
                  saveDataApi={ALTER_PROPERTY_DATA}
                />
                <ListingTable
                  data={_.cloneDeep(tableData?.data || [])}
                  headersDesktop={desktopHeaders}
                  headersMobile={mobileHeaders}
                  fieldConst={fieldConst}
                  editApi={ALTER_PROPERTY_DATA}
                  deleteApi={DELETE_PROPERTY_DATA}
                  getDataApi={GET_PROPERTY_DATA}
                  itemCount={tableData?.itemCount}
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
