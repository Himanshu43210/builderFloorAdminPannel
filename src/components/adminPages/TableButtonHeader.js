import { useState } from "react";
import React from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import { Button } from "react-bootstrap";
import ReusablePopup from "../reusables/ReusablePopup";
import FormBuilder from "../reusables/FormBuilder";
import {FaUserPlus , FaCloudUploadAlt ,FaCloudDownloadAlt} from "react-icons/fa"
// import './../../css/UserStyle.css'

const TableButtonHeader = ({ tableData, fieldConst }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [newPopup, setNewPopup] = useState(null);
  const [importPopup, setImportPopup] = useState(null);
  const [exportPopup, setExportPopup] = useState(null);
  const [formData, setFormData] = useState({});

  const convertArrayToExcel = (dataArray, filename) => {
    const worksheet = XLSX.utils.json_to_sheet(dataArray);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });

    // Create a temporary anchor element to download the Excel file
    const anchor = document.createElement("a");
    const url = window.URL.createObjectURL(data);
    anchor.href = url;
    anchor.download = `${filename}.xlsx`;
    anchor.click();
    window.URL.revokeObjectURL(url);
  };

  const handleFormDataChange = (newFormData) => {
    setFormData(newFormData);
    console.log(formData);
  };

  const handleExportClick = () => {
    convertArrayToExcel(tableData, "data_export");
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://builder-floor-backend-n2ib.onrender.com/api/Users",
        formData
      );
      console.log(formData);
      // const jsondata =JSON.stringify(formData)
      // call the API to add the data

      // handle success (e.g., clear form, show success message)
    } catch (error) {
      console.log(error);
      // handle error (e.g., show error message)
    }
  };

  const toogleNewPopup = () => {
    setNewPopup(!newPopup);
  };
  const toogleUploadPopup = () => {
    setImportPopup(!importPopup);
  };
  const toogleExportPopup = () => {
    setExportPopup(!exportPopup);
  };
  return (
    <>
      {newPopup ? (
        <ReusablePopup
          onSave={handleSubmit}
          onHide={toogleNewPopup}
          onCancel={toogleNewPopup}
        >
          <FormBuilder
            fields={fieldConst}
            onFormDataChange={handleFormDataChange}
          />
        </ReusablePopup>
      ) : null}
      {importPopup ? (
        <ReusablePopup onHide={toogleUploadPopup} onCancel={toogleUploadPopup}>
          <div className="container">
            <h2 className="lbel">You Can Upload Your Files over Here</h2>
            <input className="inputtag" type="file" onChange={handleFileSelect} />
            <Button variant="success" class="btnclass">Upload File</Button>
          </div>
        </ReusablePopup>
      ) : null}
      {exportPopup ? (
        <ReusablePopup onHide={toogleExportPopup}>
        <div class="container" >

          <p className="lbel">Export Table Data into Excel</p>
          <Button  variant="success" onClick={handleExportClick}>Export to Excel</Button>
        </div>
        </ReusablePopup>
      ) : null}
      <div
        style={{
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
          gap: "10px",
        }}
      >
        <Button class="btn" variant="success" onClick={toogleNewPopup}>
        <FaUserPlus />&nbsp;&nbsp;
          ADD
        </Button>
        <Button class="btn" onClick={toogleUploadPopup}>
        <FaCloudUploadAlt /> &nbsp;&nbsp;
          UPLOAD
        </Button>
        <Button class="btn" onClick={toogleExportPopup}>
        <FaCloudDownloadAlt /> &nbsp;&nbsp;
          EXPORT
        </Button>
      </div>
    </>
  );
};

export default TableButtonHeader;
