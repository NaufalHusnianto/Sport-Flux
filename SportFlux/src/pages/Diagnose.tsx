import { IonContent, IonIcon, IonPage, IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonCard, IonButton } from "@ionic/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { settings } from 'ionicons/icons';

const Diagnose: React.FC = () => {
    return (
        <IonPage>
            <IonContent color={"tertiary"}>
                <IonHeader className='ion-no-border mb-4'>
                    <IonToolbar style={{ borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} color={'primary'}>
                    <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
                    <IonGrid>
                        <IonRow style={{ display: 'flex', height: '100%', borderRadius: '20px', overflow: 'hidden' }}>
                            <IonCol size='5' className='text-center text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1', backgroundColor: '#6DBFEB' }}>
                                <IonImg src='IM1.png'/>
                            </IonCol>
                            <IonCol size='7' className='text-left text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1', backgroundColor: '#122D3B' }}>
                                <p className='fs-3 mb-1 mt-0'>A1</p>
                                <p className='m-0'>Duration : 00.05.41</p>
                                <p className='m-0'>Data Stream : 2mb</p>
                                <p className='m-0'>Battery Level : 100%</p>
                                <p className='m-0'>Status : Active</p>
                                <IonImg src='/Battery.png' style={{width: '25%'}}/>
                                <IonIcon aria-hidden="true" icon={settings} style={{ position: 'absolute', bottom: '20px', right: '20px', fontSize: '30px' }} />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
                    </IonToolbar>
                </IonHeader>

            </IonContent>
        </IonPage>
    );
}

export default Diagnose;