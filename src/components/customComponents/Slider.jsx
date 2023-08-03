import React from "react";
import { Slider, Typography } from "@mui/material";
import { convertToCr } from "../utils/HelperMethods";

export default function SliderComponent({
  component,
  value,
  handleValueChange,
}) {
  const name = component.text;
  const minValue = convertToCr(component.minValue);
  const maxValue = convertToCr(component.maxValue);
  const minVal = component.minValue;
  const maxVal = component.maxValue;
  const defaultValue = component.defaultValue;
  const step = component.step;

  if (!value && defaultValue) handleValueChange(defaultValue);

  const handleChange = (event, newValue) => {
    handleValueChange(newValue);
  };

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
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => (convertToCr(value.toFixed(1)) + " Cr.")}
      />
    </div>
  );
}
