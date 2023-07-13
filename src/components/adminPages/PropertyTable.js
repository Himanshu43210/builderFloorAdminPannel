import React from "react";
import FormBuilder from "../reusables/FormBuilder";
import { newPropertyConst } from "../fieldConsts/PropertiesFieldConst";

function PropertyTable() {
  const handleSubmit = (formData) => {
    console.log("Form Data:", formData);
  };
  return <FormBuilder fields={newPropertyConst} onSubmit={handleSubmit} />;
}

export default PropertyTable;
