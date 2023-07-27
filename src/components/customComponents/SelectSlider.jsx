import { Slider, TextField } from '@mui/material';
import React from 'react';

export const SelectSlider = ({ component,handleChange }) => {
    return(
        <>
            <div>
                <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                <Slider
                    key={component.name}
                    name={component.name}
                    value={component.value || component.defaultValue}
                    min={parseFloat(component.minValue)}
                    max={parseFloat(component.maxValue)}
                    step={0.1}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(value) => value.toFixed(1)}
                />
                <label>Max:{component.max}Sq.Yd.</label>
                <label>Min:{component.min}Sq.Yd.</label>
            </div>

        </>
    )
}