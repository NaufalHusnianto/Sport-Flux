import { IonContent, IonCardContent, IonCardTitle, IonPage, IonHeader, IonGrid, IonRow, IonToolbar, IonCol, IonImg, IonCard, IonSearchbar, IonIcon, IonCardHeader } from "@ionic/react";
import "bootstrap/dist/css/bootstrap.min.css";
import getInitialData from "../utils";
import PersonList from "../components/PersonList";
import Searchbar from "../components/Searchbar";
import React from "react";
import Filter from "../components/filter/Filter";
import './style.css';

interface Person{
    id: number;
    name: string;
    specialist: string[];
    rating: number;
    location: string;
    tag: string[];
}

interface PersonState{
    persons: Person[];
    keyWord: string;
    showFilter: boolean;
    selectedCategories: {
        specialist: string[],
        rating: number[],
        location: string[]
    };
}

interface SelectedCategories {
    specialist: string[];
    rating: number[];
    location: string[];
}

class Trainer extends React.Component<{}, PersonState>{
    constructor(props: {}){
        super(props);

        this.state = {
            persons: getInitialData(),
            keyWord: '',
            showFilter: false,
            selectedCategories: {
                specialist: [],
                rating: [],
                location: []
            }
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.closeFilter = this.closeFilter.bind(this);
        this.openFilter = this.openFilter.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
    }

    onSearchHandler({name}: {name: string}){
        this.setState({keyWord: name});
    }

    openFilter(){
        this.setState({showFilter: true});
    }

    closeFilter(){
        this.setState({showFilter: false});
    }

    applyFilter(selected: SelectedCategories){
        this.setState({selectedCategories: selected})
    }

    render(){
        return(
        <IonPage>
            <IonContent color={"tertiary"}>
            <Filter openFilter="open-filter" applyFilter={this.applyFilter} />
                <IonCard className='ion-no-border m-0' style={{ borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '2px 2px 5px #0b0b0b', zIndex: 9999}}>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="10">
                            <Searchbar search={(searchTerm: string) => this.onSearchHandler({name: searchTerm})}/>
                            </IonCol>
                            <IonCol size="2">
                                <IonImg src='/dark.png' style={{ borderRadius: '20px', width: '37px', height: '37px' }}
                                id="open-filter"/>
                                <div></div>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="d-flex">
                                <p className="ms-3 me-3">Suggestion: </p>
                                <p style={{background: 'gold', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }} className="text-black rounded-pill ps-2 pe-2 ms-1 me-1">Renang</p>
                                <p style={{background: 'gold', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }} className="text-black rounded-pill ps-2 pe-2 ms-1 me-1">Bulu Tangkis</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>

                <IonCard color={'primary'} className='mt-4 mb-4' style={{borderRadius: '25px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }} >
                    <IonCardHeader>
                        <IonCardTitle className='fw-bold fs-5'>Recomendation</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent >
                        <IonCard color={"secondary"} className="m-0 rounded-4" style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }}>
                            <IonGrid>
                                <IonRow style={{ display: 'flex', height: '100%', borderRadius: '20px', overflow: 'hidden' }}>
                                    <IonCol size='4' className='text-center text-white d-flex flex-column justify-content-center m-0'>
                                        <IonImg src='/profile.png' style={{ background: 'green', boxShadow: '2px 2px black', borderRadius: '20px' }}/>
                                    </IonCol>
                                    <IonCol size='8' className='text-left text-white d-flex flex-column justify-content-center'>
                                        <p className="fw-bold" style={{fontSize: '.8rem'}}>Trainer Renang Atletik</p>
                                        <p className="fs-8">Danio Alavan</p>
                                        <p className="fs-8">Renang</p>
                                        <p className="fs-8">Karanganyar</p>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCard>
                    </IonCardContent>
                </IonCard>

                <IonCard color={'primary'} className='mt-4 mb-4' style={{borderRadius: '25px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }} >
                    <IonCardHeader>
                        <IonCardTitle className='fw-bold fs-5 bg-white text-black text-center rounded-pill' style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }}>Trainer List</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent >
                            <PersonList persons={this.state.persons.filter(
                                person => person.name.toLowerCase().includes(this.state.keyWord.toLowerCase())
                            )} 
                            type={'trainer'}
                            selectedCategories={this.state.selectedCategories}
                            />
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
        )
    }
}

export default Trainer;