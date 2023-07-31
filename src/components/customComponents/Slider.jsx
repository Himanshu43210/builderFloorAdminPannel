import React from "react";
import { Slider, Typography } from "@mui/material";

export default function SliderComponent({
  component,
  value,
  handleValueChange,
}) {
  const name = component.text;
  const minValue = component.minValue;
  const maxValue = component.maxValue;
  const defaultValue = component.defaultValue;
  const step = component.step;

  if (!value && defaultValue) handleValueChange(defaultValue);

  const handleChange = (event, newValue) => {
    handleValueChange(newValue);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="caption">{minValue}</Typography>
        <Typography variant="caption">{maxValue}</Typography>
      </div>
      <Slider
        key={name}
        name={name}
        value={value || defaultValue}
        min={parseFloat(minValue)}
        max={parseFloat(maxValue)}
        step={parseFloat(step)}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => value.toFixed(1)}
      />
    </div>
  );
}
