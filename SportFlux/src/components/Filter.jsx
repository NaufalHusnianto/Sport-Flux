import { IonCard, IonCardContent, IonModal, IonButton } from "@ionic/react";
import React from "react";

class Filter extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { isOpen, onClose } = this.props;     

        return(
            <IonModal className="filter-modal" isOpen={isOpen} onClose={onClose}>
                <IonCard className="filter-card mx-auto">
                    <IonCardContent>
                        <p>halo guys, ini adalah filter</p>
                        <IonButton onClick={onClose}>X</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonModal>
        )
    }
}

export default Filter;