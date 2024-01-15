import React from "react";
import { IonCard, IonGrid, IonRow, IonCol, IonImg } from "@ionic/react";

class ActivityRecord extends React.Component {
    render() {
        return(
            <>
                <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
                    <IonGrid>
                        <IonRow style={{ display: 'flex', height: '100%', borderRadius: '30px', overflow: 'hidden', background: 'rgba(0,0,0,0.5)' }}>
                            <IonCol size='5' className='text-center text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1' }}>
                                <p style={{background: 'green'}} className='rounded-pill text-white'>EMG Record</p>
                                <IonImg src='pulse.png' style={{width: '50%'}} className='m-2'/>
                            </IonCol>
                            <IonCol size='7' className='text-left text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1' }}>
                                <p className='m-0'>Device : 5</p>
                                <p className='m-0'>Channel : 10</p>
                                <p className='m-0'>Status : Diagnosed</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
            </>
        );
    };
};

export default ActivityRecord;