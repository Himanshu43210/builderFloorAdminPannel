import _ from "lodash";
import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListingTable from "../../utils/ListingTable";
import { newUserConst } from "../../fieldConsts/UserFieldConst";
import TableButtonHeader from "./TableButtonHeader";
import Navbar from "./Navbar";
import {
  ALTER_USER_DATA,
  DELETE_USER_DATA,
  GET,
  GET_USER_DATA,
} from "../../utils/Const";
import AutoFetchApi from "../../customComponents/AutoFetchApi";
import { API_ENDPOINTS } from "../../../redux/utils/api";
import { selectApiData } from "../../../redux/utils/selectors";

export default function UserManagement() {
  const desktopHeaders = [
    "name",
    "PhoneNumber",
    "address",
    "email",
    "role",
    "parentId",
  ];
  const mobileHeaders = ["name", "role"];
  const fieldConst = newUserConst;
  let tableData = useSelector((state) => selectApiData(state, GET_USER_DATA));

  return (
    <>
      {!tableData && (
        <AutoFetchApi url={API_ENDPOINTS[GET_USER_DATA]} method={GET} />
      )}
      <div>
        <div>
          <Navbar />
          <Card>
            <Card.Header className="font">User Details</Card.Header>
            <Card.Body>
              <TableButtonHeader
                fieldConst={fieldConst}
                tableData={_.cloneDeep(tableData?.data || [])}
                saveDataApi={ALTER_USER_DATA}
              />
              <ListingTable
                data={_.cloneDeep(tableData?.data || [])}
                headersDesktop={desktopHeaders}
                headersMobile={mobileHeaders}
                fieldConst={fieldConst}
                editApi={ALTER_USER_DATA}
                deleteApi={DELETE_USER_DATA}
                getDataApi={GET_USER_DATA}
                itemCount={tableData?.itemCount}
              />
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
