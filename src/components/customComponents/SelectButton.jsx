import React from "react";
import Select from "react-select";

export default function SelectButton({
  name,
  options,
  handleValueChange,
  defaultValue,
  label, //from json
  value, //from screen
}) {
  if (defaultValue) handleValueChange(defaultValue);
  return (
    <Select
      key={name}
      name={name}
      options={options}
      onChange={(selectedOption) => {
        handleValueChange(selectedOption);
      }}
      value={
        (value &&
          (typeof value === "string"
            ? { label: value, value: value }
            : value)) ||
        defaultValue || { label: label, value: "" }
      }
    />
  );
}
