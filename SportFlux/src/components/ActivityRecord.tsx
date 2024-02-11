import React from "react";
import { IonCard, IonGrid, IonRow, IonCol, IonImg } from "@ionic/react";

class ActivityRecord extends React.Component {
    render() {
        return(
            <>
                <IonCard className='m-2 mt-4 ps-4 pe-4 text-white' style={{borderRadius: '20px', background: 'rgba(0,0,0,0.3)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}}>
                    <IonGrid fixed={true}>
                        <IonRow className='mt-2'>
                            <IonCol size='6' className='ion-text-center'>
                                <p style={{ background: '#008100', fontSize:'16px', width: 'fit-content', padding: '10px', borderRadius: '15px', margin: 'auto', fontWeight: 'bold' }}>EMG Record</p>
                            </IonCol>
                            <IonCol></IonCol>
                            <IonCol size='auto'>
                                <IonImg src='/Assets/icons/user-grade/premium_icon.png' style={{width: '50px'}}/>
                            </IonCol>
                        </IonRow>
                        <IonRow className='mb-2'>
                            <IonCol size='3' className='m-0'>
                                <IonImg src='/Assets/img/pulse.png' className='m-auto' style={{ border: '2px solid #fff', width: '100%', borderRadius: '10px'}}/>
                            </IonCol>
                            <IonCol style={{ fontSize: '13px' }}>
                                <IonRow>
                                    <IonCol size='4'>Devices</IonCol>
                                    <IonCol size='1'>:</IonCol>
                                    <IonCol size='5'>3</IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size='4'>Channel</IonCol>
                                    <IonCol size='1'>:</IonCol>
                                    <IonCol size='5'>6</IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size='4'>Status</IonCol>
                                    <IonCol size='1'>:</IonCol>
                                    <IonCol size='6'>Recorded</IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
            </>
        );
    };
};

export default ActivityRecord;