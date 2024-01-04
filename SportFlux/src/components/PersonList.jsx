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
    return <>{renderedPersons}</>
}

export default PersonList;