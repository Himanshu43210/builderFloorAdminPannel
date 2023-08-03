import React from "react";
import { Slider, Typography } from "@mui/material";
import { convertToCr } from "../utils/HelperMethods";

export default function SliderComponent({
  component,
  value,
  handleValueChange,
}) {
  const name = component.text;
  const minVal = component.minValue;
  const maxVal = component.maxValue;
  const defaultValue = component.defaultValue;
  const step = component.step;

  if (!value && defaultValue) handleValueChange(defaultValue);

  const handleChange = (event, newValue) => {
    handleValueChange(newValue);
  };
  const getVal = value || defaultValue;
  const minValue = convertToCr(getVal[0]);
  const maxValue = convertToCr(getVal[1]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="caption">{minValue + " Cr."}</Typography>
        <Typography variant="caption">{maxValue + " Cr."}</Typography>
      </div>
      <Slider
        key={name}
        name={name}
        value={value || defaultValue}
        min={parseFloat(minVal)}
        max={parseFloat(maxVal)}
        step={parseFloat(step)}
        onChange={handleChange}
        valueLabelDisplay="off"
        valueLabelFormat={(value) => (convertToCr(value.toFixed(1)) + " Cr.")}
      />
    </div>
  );
}
