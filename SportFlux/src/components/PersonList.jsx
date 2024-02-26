import React from "react";
import PersonItemContent from "./PersonItemContent";

function PersonList({persons, type, selectedCategories}){
    const renderedPersons = persons.map((person) => {
        if (type==person.specialist && 
            (selectedCategories.specialist.length === 0 || selectedCategories.specialist.includes(person.specialist)) &&
            (selectedCategories.rating.length === 0 || selectedCategories.rating.includes(person.rating)) &&
            (selectedCategories.location.length === 0 || selectedCategories.location.includes(person.location))){
            return(
                <PersonItemContent 
                {...person} key={person.id}/> 
            );
        }
        return null;
    })
    if (renderedPersons.filter(Boolean).length === 0) {
        return <p className="text-center">Tidak ditemukan</p>;
      }

    return <>{renderedPersons}</>
}

export default PersonList;