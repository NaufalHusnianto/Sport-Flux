import { IonCard, IonCardContent, IonModal, IonButton, IonLabel, IonItem, IonCheckbox } from "@ionic/react";
import React from "react";
import FilterList from "./FilterList";

class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedCategories: []
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(option){
        if (this.state.selectedCategories.includes(option)){
            this.setState((prevState) => ({
                selectedCategories: prevState.selectedCategories.filter(item => item !== option)
            }))
        }else{
            this.setState((prevState) => ({
                selectedCategories: [...prevState.selectedCategories, option]
            }));
        }
    }

    render(){
        const { isOpen, onClose } = this.props;
        const categories = ["Orthopedic", "Neurological", "Cardiopulmonary", "Pediatric"];
        const kotaIndonesia = ["Jakarta","Surakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Makassar", "Palembang", "Tangerang", "Depok", "Batam", "Bekasi", "Padang", "Bogor", "Malang", "Pekanbaru", "Bandar Lampung", "Denpasar", "Banjarmasin", "Tanjungpinang", "Pontianak"];
    

        return(
            <IonModal className="filter-modal" isOpen={isOpen} onClose={onClose} scrollEvents={true}>
                <IonCard className="filter-card" style={{overflowY: "scroll"}}>
                    <IonCardContent>
                        <h1 style={{marginTop:0}}>Filter</h1>
                        <h1>Categories</h1>
                        <FilterList selectedCategories={this.state.selectedCategories} options={categories} handleButtonClick={this.handleButtonClick} />
                        <h1>Rating</h1>
                        <FilterList selectedCategories={this.state.selectedCategories} options={[1, 2, 3, 4, 5]} handleButtonClick={this.handleButtonClick} />
                        {/* <IonButton onClick={onClose}>X</IonButton> */}
                        <h1>Location</h1>
                        <FilterList selectedCategories={this.state.selectedCategories} options={kotaIndonesia} handleButtonClick={this.handleButtonClick} />
                    </IonCardContent>
                </IonCard>
            </IonModal>
        )
    }
}

export default Filter;