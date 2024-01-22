import { IonContent, IonAvatar, IonCardContent, IonCardTitle, IonPage, IonHeader, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonImg, IonItem, IonInput, IonFooter, IonIcon } from "@ionic/react";
import { send } from "ionicons/icons";
import React from "react";
import UserChat from "../components/chat/UserChat";
import ProviderChat from "../components/chat/ProviderChat";

class ConsultationChat extends React.Component {
    render() {
        return(
            <IonPage>
                <IonContent color={"tertiary"}>
                <IonImg src="/LOGO.png" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', height: 'auto', opacity: 0.3 , zIndex: -1}} />
                    <IonCard className='ion-no-border m-0' style={{ borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '2px 2px 5px #0b0b0b', zIndex: 9999}}>
                        <IonGrid>
                            <IonRow>
                                <IonCol className='d-flex justify-content-center align-item-center'>
                                    <IonImg src='LOGO.png' style={{ width: '30%', height: 'auto' }} />
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCard>

                    <div style={{ marginBottom: '2vh', marginTop: '1rem' }}>
                        {/* Chat dari Pengguna */}
                        <UserChat message="Permisi Kak!" username="Alex"/>
                        {/* Chat dari layanan */}
                        <ProviderChat message="Halo kak!, ada yang bisa saya bantu ?" username="Steve"/>
                    </div>

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