import React from "react";
import FilterOption from "./FilterOption";
import { FilterOptionProps } from "./InterfaceFilter";
import { IonButtons } from "@ionic/react";

interface FilterListProps extends FilterOptionProps {
    options: string[];
}

const FilterList: React.FC<FilterListProps> = ({selectedCategories, category, options, handleButtonClick}) => {
    const renderedOptions = options.map((option)=>{
        return(
            <FilterOption
             key={option}
             selectedCategories={selectedCategories}
             option={option}
             handleButtonClick={() => handleButtonClick(option, category)}
             category={category}
             />
        )
    });

    return (
        <IonButtons slot="start" className="filter-list">{renderedOptions}</IonButtons>
    );
}

export default FilterList;