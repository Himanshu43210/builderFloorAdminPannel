import { Slider, TextField } from '@mui/material';
import React from 'react';

export const SelectSlider = ({ component, handleValueChange, stateValue = component.defaultValue }) => {
    return (
        <>
            <div>
                <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    onChange={(e) => {
                        handleValueChange([e.target.value, stateValue[1]])
                    }} value={stateValue[0]} />
                <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    onChange={(e) => {
                        handleValueChange([stateValue[0], e.target.value])
                    }} value={stateValue[1]} />
                <Slider
                    key={component.name}
                    name={component.name}
                    value={stateValue}
                    min={parseFloat(component.minValue)}
                    max={parseFloat(component.maxValue)}
                    step={component.step}
                    onChange={(action, value) => {
                        console.log(value)
                        handleValueChange(value)
                    }}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(value) => value.toFixed(1)}
                />
                <label>Max:{stateValue[0]}Sq.Yd.</label>
                <label>Min:{stateValue[1]}Sq.Yd.</label>
            </div>

        </>
    )
}