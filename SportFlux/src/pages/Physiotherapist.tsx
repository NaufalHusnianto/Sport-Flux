import { IonContent, IonCardContent, IonCardTitle, IonPage, IonHeader, IonGrid, IonRow, IonToolbar, IonCol, IonImg, IonCard, IonSearchbar, IonIcon, IonCardHeader } from "@ionic/react";
import "bootstrap/dist/css/bootstrap.min.css";
import getInitialData from "../utils";
import PersonList from "../components/PersonList";
import Searchbar from "../components/Searchbar";
import React from "react";

interface Person{
    id: number;
    name: string;
    category: string[];
    rating: number;
    location: string;
    tag: string[];
}

interface PersonState{
    persons: Person[];
    keyWord: string;
}

class Physiotherapist extends React.Component<{}, PersonState>{
    constructor(props: {}){
        super(props);

        this.state = {
            persons: getInitialData(),
            keyWord: ''
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler({name}: {name: string}){
        this.setState({keyWord: name});
    }

    render(){
        return(
            <IonPage>
                <IonContent color={"tertiary"}>
                    <IonHeader className='ion-no-border'>
                    <IonToolbar style={{ borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', background: 'rgba(0, 0, 0, 0.3)'}} color={'primary'}>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="10">
                                    <Searchbar search={(searchTerm: string) => this.onSearchHandler({name: searchTerm})}/>
                                </IonCol>
                                <IonCol size="2">
                                    <IonImg src='/dark.png' style={{ borderRadius: '20px', width: '37px', height: '37px' }}/>
                                    <div></div>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol className="d-flex">
                                    <p className="ms-3 me-3">Suggestion: </p>
                                    <p style={{background: 'gold'}} className="text-black rounded-pill ps-2 pe-2 ms-1 me-1">Manual</p>
                                    <p style={{background: 'gold'}} className="text-black rounded-pill ps-2 pe-2 ms-1 me-1">FisioNeurologis</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonToolbar>
                    </IonHeader>
    
                    
                    <IonCard color={'primary'} className='mt-4 mb-4' style={{borderRadius: '25px', background: 'rgba(0, 0, 0, 0.3)'}} >
                        <IonCardHeader>
                            <IonCardTitle className='fw-bold fs-5'>Recomendation</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent >
                            <IonCard color={"secondary"} className="m-0 rounded-4">
                                <IonGrid>
                                    <IonRow style={{ display: 'flex', height: '100%', borderRadius: '20px', overflow: 'hidden' }}>
                                        <IonCol size='4' className='text-center text-white d-flex flex-column justify-content-center m-0'>
                                            <IonImg src='/profile.png' style={{ background: 'green', boxShadow: '2px 2px black', borderRadius: '20px' }}/>
                                        </IonCol>
                                        <IonCol size='8' className='text-left text-white d-flex flex-column justify-content-center'>
                                            <p className="fw-bold" style={{fontSize: '.8rem'}}>Fisioterapis Ortopedi</p>
                                            <p className="fs-8">Danio Alavan</p>
                                            <p className="fs-8">Ortopedi</p>
                                            <p className="fs-8">Karanganyar</p>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCard>
                        </IonCardContent>
                    </IonCard>
                    <IonCard color={'primary'} className='mt-4 mb-4' style={{borderRadius: '25px', background: 'rgba(0, 0, 0, 0.3)'}} >
                        <IonCardHeader>
                            <IonCardTitle className='fw-bold fs-5 bg-white text-black text-center rounded-pill'>Physiotherapist  List</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <PersonList persons={this.state.persons.filter(
                                person => person.name.toLowerCase().includes(this.state.keyWord.toLowerCase())
                            )} 
                            type={'physiotherapy'}
                            />
                        </IonCardContent>
                    </IonCard>
    
                </IonContent>
            </IonPage>
        )
    }
}

export default Physiotherapist;