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
  return (
    <Select
      key={name}
      name={name}
      options={options}
      onChange={(selectedOption) => {
        handleValueChange(selectedOption);
      }}
      value={value || defaultValue || { label: label, value: "" }}
    />
  );
}
