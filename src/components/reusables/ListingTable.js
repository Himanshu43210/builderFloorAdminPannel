import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import Pagination from "react-js-pagination";
import Select from "react-select";
import ReusablePopup from "./ReusablePopup";
import FormBuilder from "./FormBuilder";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const options = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 20, label: "20" },
];

const ListingTable = ({
  data,
  headersDesktop = [],
  headersMobile = [],
  fieldConst,
}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showRowModal, setShowRowModal] = useState(false);
  const [currentRowData, setCurrentRowData] = useState({});
  const [activePage, setActivePage] = useState(1);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(10);
  const [sortType, setSortType] = useState("asc");
  const [sortColumn, setSortColumn] = useState("id");
  const [selectedOption, setSelectedOption] = useState(options[1]);
  const [formData, setFormData] = useState({});

  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as per your needs

  const tableHeaders = isMobile ? headersMobile : headersDesktop;

  const handleSave = () => {
    // if (/*validation succeeds*/) {
    //   // use formData for sav ing
    // }
    console.log(formData);
  };

  const handleFormDataChange = (newFormData) => {
    setFormData(newFormData);
    console.log(formData);
  };

  const toogleRowClick = () => {
    console.log(currentRowData);
    setShowRowModal(!showRowModal);
  };

  const toogleEdit = () => {
    console.log(currentRowData);
    setShowEditModal(!showEditModal);
  };

  const toogleDelete = () => {
    console.log(currentRowData);
    setShowDeleteModal(!showDeleteModal);
  };

  const handleSort = (column) => {
    const newSortType = sortType === "asc" ? "desc" : "asc";
    setSortType(newSortType);
    setSortColumn(column);
    console.log(
      `Sort type: ${newSortType}, Sort column: ${column}, Active page: ${activePage}, Records per page: ${itemsCountPerPage}`
    );
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    console.log(
      `Sort type: ${sortType}, Sort column: ${sortColumn}, Active page: ${pageNumber}, Records per page: ${itemsCountPerPage}`
    );
  };

  const handleRecordPerPage = (selectedOption) => {
    setSelectedOption(selectedOption);
    setItemsCountPerPage(selectedOption.value);
    console.log(
      `Sort type: ${sortType}, Sort column: ${sortColumn}, Active page: ${activePage}, Records per page: ${selectedOption.value}`
    );
  };

  // Sort the data
  data.sort((a, b) => {
    const itemA = a[sortColumn];
    const itemB = b[sortColumn];

    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return sortType === "asc" ? comparison : comparison * -1;
  });

  return (
    <>
      {showEditModal ? (
        <ReusablePopup
          onSave={() => handleSave("SAVE")}
          onHide={toogleEdit}
          onCancel={toogleEdit}
        >
          <FormBuilder
            propsFormData={currentRowData}
            fields={fieldConst}
            onFormDataChange={handleFormDataChange}
          />
        </ReusablePopup>
      ) : null}
      {showDeleteModal ? (
        <ReusablePopup
          onYes={() => handleSave("DELETE")}
          onHide={toogleDelete}
          onCancel={toogleDelete}
        >
          <p>Are you sure want to Delete?</p>
        </ReusablePopup>
      ) : null}
      {showRowModal ? (
        <ReusablePopup onHide={toogleRowClick} onClose={toogleRowClick}>
          <FormBuilder
            propsFormData={currentRowData}
            fields={fieldConst}
            onFormDataChange={handleFormDataChange}
          />
        </ReusablePopup>
      ) : null}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th
                key={index}
                onClick={() => handleSort(header)}
                style={{ cursor: "pointer" }}
              >
                {header}
                {sortColumn === header &&
                  (sortType === "asc" ? <FaCaretUp /> : <FaCaretDown />)}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data
            .slice(
              (activePage - 1) * itemsCountPerPage,
              activePage * itemsCountPerPage
            )
            .map((element) => (
              <tr
                key={element.id}
                onClick={() => {
                  setCurrentRowData(element);
                  toogleRowClick();
                }}
              >
                {tableHeaders.map((header, index) => (
                  <td key={index}>{element[header]}</td>
                ))}
                <td>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentRowData(element);
                      toogleEdit();
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentRowData(element);
                      toogleDelete();
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <p>Records Per Page</p>
      <Select
        value={selectedOption}
        onChange={handleRecordPerPage}
        options={options}
      />
      <Pagination
        className="my-pagination"
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={data.length}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </>
  );
};

export default ListingTable;
