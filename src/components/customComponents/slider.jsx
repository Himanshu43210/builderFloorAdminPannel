import React from "react";
import { Slider, Typography } from "@mui/material";

export default function SliderComponent({
  value,
  name,
  minValue,
  maxValue,
  defaultValue = [2.8, 3.0],
  handleValueChange,
}) {
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
        step={0.1}
        onChange={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => value.toFixed(1)}
      />
    </div>
  );
}
