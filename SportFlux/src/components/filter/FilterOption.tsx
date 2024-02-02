import { IonButton } from "@ionic/react";
import React from "react";
import { FilterOptionProps } from "./InterfaceFilter";

const FilterOption: React.FC<FilterOptionProps> = ({selectedCategories,category, option, handleButtonClick}) => {
    return (
        <IonButton 
        className="filter-option"
        fill={selectedCategories.includes(option) ? "solid" : "outline"}
        onClick={() => handleButtonClick(option, category)}
        >
            {option}
        </IonButton>
    )
}

export default FilterOption;