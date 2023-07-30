import React from "react";
import { ToggleButtonGroup } from "react-bootstrap";

export const ToggleButton = ({ value, component, handleValueChange }) => {
  return (
    <>
      <ToggleButtonGroup>
        <ToggleButton value={value} onClick={handleValueChange}>
          {component.name}
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
