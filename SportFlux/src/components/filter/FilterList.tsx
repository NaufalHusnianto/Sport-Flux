import React from "react";
import FilterOption from "./FilterOption";
import { FilterProps } from "./InterfaceFilter";
import { IonButtons } from "@ionic/react";

interface FilterListProps extends FilterProps {
    options: string[];
}

const FilterList: React.FC<FilterListProps> = ({selectedCategories, options, handleButtonClick}) => {
    const renderedOptions = options.map((option)=>{
        return(
            <FilterOption
             key={option}
             selectedCategories={selectedCategories}
             option={option}
             handleButtonClick={handleButtonClick}
             />
        )
    });

    return (
        <IonButtons slot="start" className="filter-list">{renderedOptions}</IonButtons>
    );
}

export default FilterList;