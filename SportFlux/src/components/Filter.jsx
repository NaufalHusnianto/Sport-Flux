import { IonCard, IonCardContent, IonModal, IonButton, IonLabel, IonItem, IonCheckbox } from "@ionic/react";
import React from "react";
import FilterList from "./FilterList";

class Filter extends React.Component{
    constructor(props){
        super(props);
    }

    handleButtonClick(){}

    render(){
        const { isOpen, onClose } = this.props;
        const selectedCategories = []
        const categories = ["Orthopedic", "Neurological", "Cardiopulmonary", "Pediatric"]     

        return(
            <IonModal className="filter-modal" isOpen={isOpen} onClose={onClose} scrollEvents={true}>
                <IonCard className="filter-card">
                    <IonCardContent style={{overflowY: "scroll"}}>
                        <h1 style={{marginTop:0}}>Filter</h1>
                        <h1>Categories</h1>
                        <FilterList selectedCategories={selectedCategories} options={categories} handleButtonClick={this.handleButtonClick} />
                        <h1>Rating</h1>
                        <FilterList selectedCategories={selectedCategories} options={[1, 2, 3, 4, 5]} handleButtonClick={this.handleButtonClick} />
                        <IonButton onClick={onClose}>X</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonModal>
        )
    }
}

export default Filter;