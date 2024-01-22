import { IonCard, IonIcon, IonCardTitle, IonCol, IonContent, IonButton, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar  } from '@ionic/react';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { useState, useEffect } from 'react';
import { settings } from 'ionicons/icons';
import OwnedDevice from '../components/OwnedDevice';

const DeviceManager: React.FC = () => {
  const [connectedDevices, setConnectedDevices] = useState<number>(0);

  useEffect(() => {
    // hittung jumlah device yang terpasang
    const calculateConnectedDevices = () => {
      const ownedDeviceElements = document.getElementsByClassName('owned-device');
      const totalConnectedDevices = ownedDeviceElements.length;

      setConnectedDevices(totalConnectedDevices);
    };

    calculateConnectedDevices();
  }, []);

  return (
    <IonPage>
      <IonContent color={'tertiary'}>
      <IonImg src="/IM2.png" style={{ position: 'fixed', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: 'auto', opacity: 0.15 , zIndex: -1}} />
        {/* header  */}
        <IonCard className='ion-no-border m-0' style={{ position: 'absolute', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '2px 2px 5px #0b0b0b', zIndex: 9999}}>
            <IonGrid className='mb-2'>
              <IonRow>
                <IonCol className='d-flex justify-content-center align-item-center'>
                  <IonImg src='LOGO.png' style={{ width: '30%', height: 'auto' }} />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size='4' className='p-3 d-flex align-items-center justify-content-center'>
                  <IonImg src='/T11.png' style={{ width: '100%', height: '90%', backgroundColor: '#122D3B', borderRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }}/>
                </IonCol>
                <IonCol size='8' className='pt-3 pb-3 pe-3'>
                  <div style={{ display: 'flex', height: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }}>
                    <div className='text-center text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1', backgroundColor: '#122D3B' }}>
                      <p className='fs-8 mb-1 mt-0 fw-bold'>Device Connected</p>
                      <p className='mb-0 fs-1 fw-bold'>{connectedDevices}</p>
                    </div>
                    <div className='text-center text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1', backgroundColor: '#6DBFEB' }}>
                      <p className='fs-8 mb-1 mt-0 fw-bold'>Data Stream</p>
                      <p className='mb-0 fs-1 fw-bold'>20</p>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
        </IonCard>

      {/* content */}
        <IonCard className='mt-0' color={'primary'} style={{ top: '25vh', borderRadius: '30px', background: 'rgba(0, 0, 0, 0.15)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }}>
          <IonCardTitle className='text-center mt-3'>
            <p style={{ margin: 'auto', width: '50%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }} className='bg-white rounded-pill text-black fs-4 p-2'>Owned Device</p>
          </IonCardTitle>

          {/* Import dari OwnedDevice.tsx */}
          <OwnedDevice/>
          <OwnedDevice/>
          <OwnedDevice/>
          <OwnedDevice/>
          
        </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default DeviceManager;
