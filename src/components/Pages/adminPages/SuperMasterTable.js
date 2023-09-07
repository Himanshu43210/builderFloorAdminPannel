import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListingTable from "../../utils/ListingTable";
import Navbar from "../../utils/Navbar";
import TableButtonHeader from "../../utils/TableButtonHeader";
import { newPropertyConst } from "../../fieldConsts/PropertiesFieldConst";
import AutoFetchApi from "../../customComponents/AutoFetchApi";
import { API_ENDPOINTS } from "../../../redux/utils/api";
import { selectApiData, selectApiStatus } from "../../../redux/utils/selectors";
import _ from "lodash";
import {
  ALTER_PROPERTY_DATA,
  APPROVE_PROPERTY_DATA,
  DELETE_PROPERTY_DATA,
  GET,
  GET_ADMIN_PROPERTY_DATA,
  GET_PROPERTY_DATA,
  LOADING,
  POST,
} from "../../utils/Const";
import { CircularProgress } from "@mui/material";
import { MASTER_TABLE } from "../../../UserJson";
import RenderComponent from "../../customComponents/ComponentRenderer";

export default function PropertyManagement() {
  const desktopHeaders = {
    Location: "sectorNumber",
    "Plot No.": "plotNumber",
    Size: "size",
    Floor: "floor",
    Title: "title",
    Price: "price",
    Accommodation: "accommodation",
    Facing: "facing",
    "Park Facing": "parkFacing",
    Corner: "corner",
    Possession: "possession",
    "Builder Name": "builderName",
    "Builder Contact Name": "builderContact",
    "Created By": "",
    "Mobile Number": "",
    "Company Name": "",
    City: "Gurgaon",
    State: "Haryana",
    "Dated of Posting": "",
    "Link Share": "",
  };

  const apiStatus = useSelector((state) =>
    selectApiStatus(state, ALTER_PROPERTY_DATA || "")
  );

  const mobileHeaders = {
    Title: "title",
    Accommodation: "accommodation",
  };

  const fieldConst = newPropertyConst;
  const tableData = useSelector((state) =>
    selectApiData(state, GET_PROPERTY_DATA)
  );
  const userProfile = useSelector((state) => state.profile);
  const dataApi =
    API_ENDPOINTS[GET_ADMIN_PROPERTY_DATA] +
    "?id=" +
    userProfile._id +
    "&role=" +
    userProfile.role;

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <RenderComponent jsonToRender={MASTER_TABLE} />
      </div>
      {!tableData && (
        <AutoFetchApi url={dataApi} method={POST} data={{ filter: {} }} />
      )}
      {apiStatus === LOADING ? (
        <CircularProgress className="loader-class" />
      ) : (
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
                  refreshDataApi={dataApi}
                  addHeader="Add Property"
                />
                <ListingTable
                  // data={_.cloneDeep(tableData?.data || [])}
                  data={{ filter: {} }}
                  headersDesktop={desktopHeaders}
                  headersMobile={mobileHeaders}
                  fieldConst={fieldConst}
                  editApi={ALTER_PROPERTY_DATA}
                  deleteApi={DELETE_PROPERTY_DATA}
                  getDataApi={GET_ADMIN_PROPERTY_DATA}
                  filterDataUrl={dataApi}
                  approveApi={APPROVE_PROPERTY_DATA}
                  itemCount={tableData?.itemCount}
                  isproperty={true}
                />
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
