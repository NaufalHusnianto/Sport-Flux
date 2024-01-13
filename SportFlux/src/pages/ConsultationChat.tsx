import { IonContent, IonAvatar, IonCardContent, IonCardTitle, IonPage, IonHeader, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonImg, IonItem, IonInput, IonFooter, IonIcon } from "@ionic/react";
import { send } from "ionicons/icons";
import React from "react";

class ConsultationChat extends React.Component {
    render() {
        return(
            <IonPage>
                <IonContent color={"tertiary"}>
                <IonImg src="/LOGO.png" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%', height: 'auto', opacity: 0.3 , zIndex: -1}} />
                    <IonHeader className='ion-no-border mb-4'>
                        <IonToolbar style={{position: 'fixed', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} color={'primary'}>
                            <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol className='d-flex justify-content-center align-item-center'>
                                            <IonImg src='LOGO.png' style={{ width: '30%', height: 'auto' }} />
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCard>
                        </IonToolbar>
                    </IonHeader>

                    <IonCard style={{ top: '10vh', background: 'rgba(0, 0, 0, 0)', boxShadow: 'none' }}>
                        {/* Chat e neng kene */}
                        <IonCard className="d-flex justify-content-end mb-2" style={{ background: 'rgba(0, 0, 0, 0)', boxShadow: 'none'}}>
                            <IonAvatar>
                                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </IonAvatar>
                            <IonCard style={{width: '70%', borderRadius: '20px'}} className="pt-3 pe-3 ps-3">
                                <p className="text-black">Permisi kak !!</p>
                            </IonCard>
                        </IonCard>
                        <IonCard className="d-flex justify-content-start mb-2" style={{ background: 'rgba(0, 0, 0, 0)', boxShadow: 'none'}}>
                            <IonAvatar>
                                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </IonAvatar>
                            <IonCard style={{width: '70%', borderRadius: '20px'}} className="pt-3 pe-3 ps-3">
                                <p className="text-black">Permisi kak !!</p>
                            </IonCard>
                        </IonCard>
                        {/* Chat e neng kene */}
                    </IonCard>

                    <IonFooter style={{position: 'fixed', bottom: 0, width: '100%'}} className="ion-no-border">
                        <IonToolbar color="primary" className="p-3" style={{borderTopLeftRadius: '50px', borderTopRightRadius: '50px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}}>
                            <IonGrid>
                                <IonRow>
                                    <IonCol size="10">
                                        <IonItem style={{ borderRadius: '15px' }}>
                                            <IonInput placeholder="Type your message..." style={{ borderRadius: '15px' }}></IonInput>
                                        </IonItem>
                                    </IonCol>
                                    <IonCol size="2" className="d-flex justify-content-center align-items-center">
                                        <IonIcon aria-hidden="true" icon={send} color='light' size="large"/>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonToolbar>
                    </IonFooter>
                </IonContent>
            </IonPage>
        );
    };
};

export default ConsultationChat;