import React, { useState } from "react";
import FormBuilder from "../reusables/FormBuilder";
import { newUserConst } from "../fieldConsts/UserFieldConst";
import ReusablePopup from "../reusables/ReusablePopup";
import { Button } from "react-bootstrap";

function UserTable() {
  const [formData, setFormData] = useState({});
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleSave = () => {
    // if (/*validation succeeds*/) {
    //   // use formData for saving
    // }
    console.log(formData);
  };

  const handleFormDataChange = (newFormData) => {
    setFormData(newFormData);
    console.log(formData);
  };

  return (
    <>
      {showEditPopup && (
        <ReusablePopup
          onSave={handleSave}
          onHide={() => {
            setShowEditPopup(false);
          }}
          onCancel={() => {
            setShowEditPopup(false);
          }}
        >
          <FormBuilder
            fields={newUserConst}
            onFormDataChange={handleFormDataChange}
          />
        </ReusablePopup>
      )}
      <Button
        onClick={() => {
          setShowEditPopup(true);
        }}
      >
        Click Open popup
      </Button>
    </>
  );
}

export default UserTable;
