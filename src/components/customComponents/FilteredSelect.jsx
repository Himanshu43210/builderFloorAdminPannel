import React from "react";
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';


export const FilteredSelect = ({ component }) => {
    return (
        <DropDownListComponent
            id={component.DropData.id}
            ignoreAccent={component.DropData.ignoreAccent || true}
            dataSource={component.DropData.dataSource.label}
            dataValue={component.DropData.dataSource.value}
            allowFiltering={component.DropData.allowFiltering || true}
            placeholder={component.DropData.placeholder || 'Select a value'}
            filterBarPlaceholder={component.DropData.filterBarPlaceholder || 'e.g: aero'}   
        />

    )
}