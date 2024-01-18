import { IonButton } from "@ionic/react";
import React from "react";
import { FilterProps } from "./InterfaceFilter";

const FilterOption: React.FC<FilterProps> = ({selectedCategories, option, handleButtonClick}) => {
    return (
        <IonButton 
        className="filter-option"
        fill={selectedCategories.includes(option) ? "solid" : "outline"}
        onClick={() => handleButtonClick(option)}
        >
            {option}
        </IonButton>
    )
}

export default FilterOption;