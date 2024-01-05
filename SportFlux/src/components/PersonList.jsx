import React from "react";
import PersonItemContent from "./PersonItemContent";

function PersonList({persons, type}){
    const renderedPersons = persons.map((person) => {
        if (type==person.category){
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