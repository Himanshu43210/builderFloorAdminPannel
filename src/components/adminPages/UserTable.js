import React, { useEffect, useState } from "react";
import ListingTable from "../utils/ListingTable";
import { newUserConst } from "../fieldConsts/UserFieldConst";
import { Card } from "react-bootstrap";
import "../css/AdminTable.css";
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
    "password",
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
                User Details
              </Card.Header>
              <Card.Body
                style={{ backgroundColor: "#f5f6f8", padding: "20px" }}
              >
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
