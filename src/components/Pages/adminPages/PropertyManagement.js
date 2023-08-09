import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListingTable from "../../utils/ListingTable";
import Panel from "../../utils/Panel";
import Navbar from "../../utils/Navbar";
import TableButtonHeader from "../../utils/TableButtonHeader";
import { newPropertyConst } from "../../fieldConsts/PropertiesFieldConst";
import AutoFetchApi from "../../customComponents/AutoFetchApi";
import { API_ENDPOINTS } from "../../../redux/utils/api";
import { selectApiData } from "../../../redux/utils/selectors";
import _ from "lodash";
import {
  ALTER_PROPERTY_DATA,
  APPROVE_PROPERTY_DATA,
  DELETE_PROPERTY_DATA,
  GET,
  GET_PROPERTY_DATA,
} from "../../utils/Const";

export default function PropertyManagement() {
  const desktopHeaders = {
    Title: "title",
    Accommodation: "accommodation",
    Possession: "possession",
    "Sector Number": "sectorNumber",
    Facing: "facing",
    "Builder Names": "builderName",
    "Channel Partner": "channelPartner",
  };

  const mobileHeaders = {
    Title: "title",
    Accommodation: "accommodation",
  };

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
        <div>
          <Navbar />
          <Card>
            <Card.Header className="font">Property Details</Card.Header>
            <Card.Body>
              <TableButtonHeader
                fieldConst={fieldConst}
                tableData={_.cloneDeep(tableData?.data || [])}
                saveDataApi={ALTER_PROPERTY_DATA}
                refreshDataApi={GET_PROPERTY_DATA}
                addHeader="Add Property"
              />
              <ListingTable
                data={_.cloneDeep(tableData?.data || [])}
                headersDesktop={desktopHeaders}
                headersMobile={mobileHeaders}
                fieldConst={fieldConst}
                editApi={ALTER_PROPERTY_DATA}
                deleteApi={DELETE_PROPERTY_DATA}
                getDataApi={GET_PROPERTY_DATA}
                approveApi={APPROVE_PROPERTY_DATA}
                itemCount={tableData?.itemCount}
              />
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
