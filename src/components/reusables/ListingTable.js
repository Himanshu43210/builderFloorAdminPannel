import React, { useState } from "react";
import { Table, Button, Modal, Responsive } from "react-bootstrap";
import Pagination from "react-js-pagination";
import Select from "react-select"; // add this
import "./AdminTable.css";
import FormPopup from "./FormPopup";
import DeletePopup from "./DeletePopup";
import DetailsPopup from "./DetailsPopup";

const options = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 20, label: "20" },
];

const AdminTable = ({ data, headersDesktop = [], headersMobile = [] }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showRowModal, setShowRowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [activePage, setActivePage] = useState(1);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(10);
  const [sortType, setSortType] = useState("asc");
  const [sortColumn, setSortColumn] = useState("id");
  const [selectedOption, setSelectedOption] = useState(options[1]);

  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as per your needs

  const tableHeaders = isMobile ? headersMobile : headersDesktop;

  const handleRowClick = (user) => {
    setCurrentUser(user);
    setShowRowModal(true);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setShowEditModal(true);
  };

  const handleDelete = (user) => {
    setCurrentUser(user);
    setShowDeleteModal(true);
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
      {showEditModal ? <FormPopup /> : null}
      {showDeleteModal ? <DeletePopup /> : null}
      {showRowModal ? <DetailsPopup /> : null}
      <Select
        value={selectedOption}
        onChange={handleRecordPerPage}
        options={options}
      />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data
            .slice(
              (activePage - 1) * itemsCountPerPage,
              activePage * itemsCountPerPage
            )
            .map((user) => (
              <tr key={user.id} onClick={() => handleRowClick(user)}>
                <td className="mobile-hide">{user.id}</td>
                <td>{user.name}</td>
                <td className="mobile-hide">{user.email}</td>
                <td className="mobile-hide">{user.address}</td>
                <td>{user.phone}</td>
                <td className="mobile-hide">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(user);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(user);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

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

export default AdminTable;
