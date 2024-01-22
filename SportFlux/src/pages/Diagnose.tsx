import { IonContent, IonCardTitle, IonIcon, IonPage, IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonCard, IonButton } from "@ionic/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { settings } from 'ionicons/icons';
import SignalChart from "../components/SignalChart";

const Diagnose: React.FC = () => {
    return (
        <IonPage>
            <IonContent color={"tertiary"}>
            <IonImg src="/IM2.png" style={{ position: 'fixed', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: 'auto', opacity: 0.3, zIndex: -1}} />
                <IonCard className='ion-no-border m-0' style={{ position: 'absolute', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '2px 2px 5px #0b0b0b', zIndex: 9999}}>
                        <IonCard color={'primary'} className="mt-2" style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
                            <IonGrid>
                                <IonRow>
                                    <IonCol className='d-flex justify-content-center align-item-center'>
                                        <IonImg src='LOGO.png' style={{ width: '30%', height: 'auto' }} />
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size='4' className="p-0 m-0">
                                        <IonCard color={"tertiary"} className="p-0 m-0 h-100 d-flex justify-content-center align-item-center" style={{ background: 'rgba(0,0,0,0)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)', borderRadius: '20px', backgroundColor: '#122D3B' }}>
                                            <IonImg src='/T11.png'/>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size='8' className="p-0 m-0">
                                        <IonCard color={'primary'} className="p-0 m-0 d-flex justify-content-center align-item-center" style={{ background: 'rgba(0,0,0,0)', boxShadow: 'none' }}>
                                            <IonGrid>
                                                <IonRow style={{ display: 'flex', height: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }}>
                                                    <IonCol size='6' className='text-left ps-2 text-white d-flex flex-column justify-content-center' style={{ flex: '1', background: 'rgba(0, 0, 0, 0.6)'}}>
                                                        <p className='m-0'>Device Name</p>
                                                        <p className='m-0'>Serial Code</p>
                                                        <p className='m-0'>Duration Usage</p>
                                                        <p className='m-0'>Records</p>
                                                        <p className='m-0'>Status</p>
                                                    </IonCol>
                                                    <IonCol size='6' className='text-left text-white d-flex flex-column justify-content-center' style={{ flex: '1', background: 'rgba(0, 0, 0, 0.4)'}}>
                                                        <p className='m-0'>A1</p>
                                                        <p className='m-0'>XXXX-2000-3939</p>
                                                        <p className='m-0'>20:20:20</p>
                                                        <p className='m-0'>20</p>
                                                        <p className='m-0'>Active</p>
                                                    </IonCol>
                                                </IonRow>
                                            </IonGrid>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCard>
                </IonCard>

                <IonCard className='mt-5' color={'primary'} style={{ top: '20vh', borderRadius: '30px', background: 'rgba(0, 0, 0, 0.5)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }}>
                    <IonGrid>
                        <IonRow className="align-items-center">
                            <IonCol size="6" className="text-start ps-2">
                                <p className="fs-5 fw-bold">All Channel</p>
                            </IonCol>
                            <IonCol size="6" className="text-end">
                                <IonButton className='mt-0 mb-3 rounded-start me-3' style={{ width: '80%' }} color={"light"}>Diagnose</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
                        <IonGrid style={{background: 'rgba(0,0,0,0.2)', borderRadius: '30px',}} className="p-0">
                            <IonRow style={{ borderRadius: '30px', background: 'rgba(0,0,0,0.3)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}}>
                                <IonCol size="5">
                                    <IonImg src='IM2.png' style={{ width: '40%', height: 'auto' }} />
                                </IonCol>
                                <IonCol size="7">
                                    <p className="fs-3 fw-bold m-0">Channel 1</p>
                                    <p className="m-0">Duration</p>
                                    <p className="m-0">Data Stream</p>
                                    <p className="m-0">Status</p>
                                </IonCol>
                            </IonRow>
                            <IonRow style={{ borderRadius: '0 0 30px 30px'}} className="p-3">
                                {/* <SignalChart /> */}
                            </IonRow>
                        </IonGrid>
                    </IonCard>
                    <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
                        <IonGrid style={{background: 'rgba(0,0,0,0.2)', borderRadius: '30px',}} className="p-0">
                            <IonRow style={{ borderRadius: '30px', background: 'rgba(0,0,0,0.3)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}}>
                                <IonCol size="5">
                                    <IonImg src='IM2.png' style={{ width: '40%', height: 'auto' }} />
                                </IonCol>
                                <IonCol size="7">
                                    <p className="fs-3 fw-bold m-0">Channel 1</p>
                                    <p className="m-0">Duration</p>
                                    <p className="m-0">Data Stream</p>
                                    <p className="m-0">Status</p>
                                </IonCol>
                            </IonRow>
                            <IonRow style={{ borderRadius: '0 0 30px 30px'}} className="p-3">
                                {/* <SignalChart /> */}
                            </IonRow>
                        </IonGrid>
                    </IonCard>
                    <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
                        <IonGrid style={{background: 'rgba(0,0,0,0.2)', borderRadius: '30px',}} className="p-0">
                            <IonRow style={{ borderRadius: '30px', background: 'rgba(0,0,0,0.3)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}}>
                                <IonCol size="5">
                                    <IonImg src='IM2.png' style={{ width: '40%', height: 'auto' }} />
                                </IonCol>
                                <IonCol size="7">
                                    <p className="fs-3 fw-bold m-0">Channel 1</p>
                                    <p className="m-0">Duration</p>
                                    <p className="m-0">Data Stream</p>
                                    <p className="m-0">Status</p>
                                </IonCol>
                            </IonRow>
                            <IonRow style={{ borderRadius: '0 0 30px 30px'}} className="p-3">
                                {/* <SignalChart /> */}
                            </IonRow>
                        </IonGrid>
                    </IonCard>
                    <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
                        <IonGrid style={{background: 'rgba(0,0,0,0.2)', borderRadius: '30px',}} className="p-0">
                            <IonRow style={{ borderRadius: '30px', background: 'rgba(0,0,0,0.3)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}}>
                                <IonCol size="5">
                                    <IonImg src='IM2.png' style={{ width: '40%', height: 'auto' }} />
                                </IonCol>
                                <IonCol size="7">
                                    <p className="fs-3 fw-bold m-0">Channel 1</p>
                                    <p className="m-0">Duration</p>
                                    <p className="m-0">Data Stream</p>
                                    <p className="m-0">Status</p>
                                </IonCol>
                            </IonRow>
                            <IonRow style={{ borderRadius: '0 0 30px 30px'}} className="p-3">
                                {/* <SignalChart /> */}
                            </IonRow>
                        </IonGrid>
                    </IonCard>

                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default Diagnose;