import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListingTable from "../../utils/ListingTable";
import Panel from "./Panel";
import Navbar from "./Navbar";
import TableButtonHeader from "./TableButtonHeader";
import { newPropertyConst } from "../../fieldConsts/PropertiesFieldConst";
import AutoFetchApi from "../../customComponents/AutoFetchApi";
import { API_ENDPOINTS } from "../../../redux/utils/api";
import { selectApiData } from "../../../redux/utils/apiSelector";
import _ from "lodash";
import {
  ALTER_PROPERTY_DATA,
  DELETE_PROPERTY_DATA,
  GET,
  GET_PROPERTY_DATA,
} from "../../utils/Const";

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
      <div>
        <div className="admin-dashboard-home">
          <Panel />
        </div>
        <div>
          <div>
            <Navbar />
            <Card>
              <Card.Header className="font">Property Details</Card.Header>
              <Card.Body>
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
