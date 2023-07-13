import React from "react";
import FormBuilder from "../reusables/FormBuilder";
import { newMasterConst } from "../fieldConsts/MasterFieldConst";

function MasterTable() {
  const handleSubmit = (formData) => {
    console.log("Form Data:", formData);
  };
  return <FormBuilder fields={newMasterConst} onSubmit={handleSubmit} />;
}

export default MasterTable;
