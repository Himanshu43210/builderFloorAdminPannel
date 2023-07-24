import React, { useState } from "react";
import ListingTable from "../reusables/ListingTable";
import { Card } from "react-bootstrap";
import "../css/AdminTable.css";
import { masterTableData } from "../toDelete/sampleMasterTableData";
import { newMasterConst } from "../fieldConsts/MasterFieldConst";
import TableButtonHeader from "./TableButtonHeader";
import Navbar from "../Navbar";
import Panel from "../Panel";

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
    <div style={ {backgroundColor:"#f6f7fc"}} >
  
    <Navbar />
   <div style={ {display:"flex"}}>
    
    <div style={ {width :"200px"}}>
          <Panel />

    </div>

       

    <div style={ {border:"none" ,marginLeft:'10px', width:"80%" , marginTop:"60px" }}>
      <Card style={ {backgroundColor:"#f6f7fc" , border:"none"}} >
        <Card.Header className="font"  style={ {backgroundColor:"#f6f7fc" , border:"none"}}>Master Details</Card.Header>
        <Card.Body style={ {backgroundColor:"#f6f7fc" , padding:"20px"}}>
          <TableButtonHeader fieldConst={fieldConst} tableData={tableData} />
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
