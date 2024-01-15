import React from "react";
import { IonCard, IonGrid, IonRow, IonCol, IonImg, IonIcon } from "@ionic/react";
import { settings } from "ionicons/icons";

class OwnedDevice extends React.Component {
    render() {
        return(
            <div className="owned-device">
                <IonCard color={'primary'} href='/diagnose' style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
                    <IonGrid>
                        <IonRow style={{ display: 'flex', height: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }}>
                            <IonCol size='5' className='text-center text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1', background: 'rgba(0,0,0,0.7)' }}>
                                <IonImg src='IM1.png'/>
                            </IonCol>
                            <IonCol size='7' className='text-left text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1', background: 'rgba(0,0,0,0.3)' }}>
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
            </div>
        );
    }
}

export default OwnedDevice;