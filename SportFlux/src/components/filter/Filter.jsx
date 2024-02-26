import { IonCard, IonCardContent, IonModal, IonHeader, IonButtons, IonButton, IonToolbar} from "@ionic/react";
import React from "react";
import FilterList from "./FilterList";
import { applyActionCode } from "firebase/auth";

class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedCategories: {
                specialist: [],
                rating: [],
                location: []
            }
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(option, category){
        const categoryArray = this.state.selectedCategories[category];

        if (categoryArray.includes(option)) {
            this.setState((prevState) => ({
                selectedCategories: {
                    ...prevState.selectedCategories,
                    [category]: categoryArray.filter((item) => item !== option),
                },
            }));
        } else {
            this.setState((prevState) => ({
                selectedCategories: {
                    ...prevState.selectedCategories,
                    [category]: [...categoryArray, option],
                },
            }));
        }
    }


    render(){
        const { openFilter, applyFilter } = this.props;
        const specialist = ["Orthopedic", "Neurological", "Cardiopulmonary", "Pediatric"];
        const kotaIndonesia = ["Jakarta","Surakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Makassar", "Palembang", "Tangerang", "Depok", "Batam", "Bekasi", "Padang", "Bogor", "Malang", "Pekanbaru", "Bandar Lampung", "Denpasar", "Banjarmasin", "Tanjungpinang", "Pontianak"];

        return(
            <IonModal className="filter-modal" trigger={openFilter} scrollEvents={true} initialBreakpoint={0.50} breakpoints={[0, 0.50, 0.85]}>
                <IonCard className="filter-card" style={{overflowY: "scroll"}}>
                    <IonCardContent>
                        <IonHeader className="filter-header">
                            <IonToolbar>
                                <h1 style={{marginTop:0}}>Filter</h1>
                                <IonButtons slot="end">
                                    <IonButton className="apply-button" onClick={() => applyFilter(this.state.selectedCategories)}>Apply</IonButton>
                                </IonButtons>
                            </IonToolbar>
                        </IonHeader>
                        <h1>Categories</h1>
                        <FilterList selectedCategories={this.state.selectedCategories.specialist} options={specialist} handleButtonClick={this.handleButtonClick} category="specialist" />
                        <h1>Rating</h1>
                        <FilterList selectedCategories={this.state.selectedCategories.rating} options={[1, 2, 3, 4, 5]} handleButtonClick={this.handleButtonClick} category="rating" />
                        <h1>Location</h1>
                        <FilterList selectedCategories={this.state.selectedCategories.location} options={kotaIndonesia} handleButtonClick={this.handleButtonClick} category="location" />
                    </IonCardContent>
                </IonCard>
            </IonModal>
        )
    }
}

export default Filter;