import { IonCard, IonIcon, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar  } from '@ionic/react';
import "bootstrap/dist/css/bootstrap.min.css";
import { settings } from 'ionicons/icons';

const DeviceManager: React.FC = () => {
  return (
    <IonPage>
      <IonContent color={'tertiary'} >
      <IonImg src="/IM2.png" style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: 'auto', opacity: 0.3, zIndex: -1}} />
        {/* header  */}
        <IonHeader className='ion-no-border'>
          <IonToolbar style={{ borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} color={'primary'}>
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
                      <p className='fs-8 mb-1 mt-0'>Device Connected</p>
                      <p className='mb-0 fs-1'>20</p>
                    </div>
                    <div className='text-center text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1', backgroundColor: '#6DBFEB' }}>
                      <p className='fs-8 mb-1 mt-0'>Data Stream</p>
                      <p className='mb-0 fs-1'>20</p>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>

      {/* content */}
        <IonCard className='mt-4' color={'primary'} style={{ borderRadius: '30px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }}>
          <IonCardTitle className='text-center mt-3'>
            <p style={{ margin: 'auto', width: '50%', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }} className='bg-white rounded-pill text-black fs-7 p-2'>Owned Device</p>
          </IonCardTitle>

          <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
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
          <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
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
          <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
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
          <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
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
          
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default DeviceManager;
