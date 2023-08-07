import React, { useEffect, useState } from "react";
import ListingTable from "../utils/ListingTable";
import { newUserConst } from "../fieldConsts/UserFieldConst";
import { Card } from "react-bootstrap";
import TableButtonHeader from "./TableButtonHeader";
import Navbar from "./Navbar";
import Panel from "./Panel";
import {
  ALTER_USER_DATA,
  DELETE_USER_DATA,
  GET,
  GET_USER_DATA,
} from "../utils/Const";
import { useSelector } from "react-redux";
import AutoFetchApi from "../customComponents/AutoFetchApi";
import { API_ENDPOINTS } from "../../redux/utils/api";
import { selectApiData } from "../../redux/utils/apiSelector";
import _ from "lodash";

function UserTable() {
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
        <div className="abc">
          <Panel />
        </div>

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
      </div>
    </>
  );
}

export default UserTable;
