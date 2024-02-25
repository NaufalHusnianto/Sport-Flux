import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import "bootstrap/dist/css/bootstrap.min.css";
import SignalChart from '../components/SignalChart';
import { useContext } from 'react';
import { AuthContext } from '../config/context/AuthContext';

const Home: React.FC = () => {
  const {currentUser} = useContext(AuthContext);

  // Dummy data jika tidak ada yang login
  const dummyPhotoURL = '/Assets/img/profile.png';
  const dummyDisplayName = 'Guest';
  
  // gunakan untuk menampilan data pengguna
  const photoURL = currentUser ? currentUser.photoURL : dummyPhotoURL;
  const displayName = currentUser ? currentUser.displayName : dummyDisplayName;

  return (
    <IonPage>
      <IonContent color={'tertiary'}>
      <IonImg src="/Assets/img/IM2.png" style={{ position: 'fixed', top: '75%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%', height: 'auto', opacity: 0.15 , zIndex: -1}} />
        {/* HEADER */}
        <IonCard className='ion-no-border m-0' style={{ borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '2px 2px 5px #0b0b0b', zIndex: 9999}}>
            <IonGrid>
              <IonRow>
                <IonCol className='d-flex justify-content-center align-item-center'>
                  <IonImg src='/Assets/img/LOGO.png' style={{ width: '30%', height: 'auto' }} />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size='4' className='w-100 h-100'>
                  <IonImg src={photoURL} style={{ background: 'green', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)', borderRadius: '20px' }}/>
                </IonCol>
                <IonCol size='8'>
                  <IonCard className='w-100 p-2 pb-3' color={'secondary'} style={{borderRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)', margin: 0}}>
                        <IonRow>
                            <IonCol size='auto'>
                                <p className='mt-0 mb-1'>{displayName}</p>
                            </IonCol>
                            <IonCol>
                                <IonImg src='/Assets/icons/user-grade/exclusive_icon.png' style={{width: '20px'}}/>
                            </IonCol>
                        </IonRow>
                        <p style={{ background: '#008100', padding: '3px', borderRadius: '10px', width: '80%', marginBottom: '5px'}}>80% healthy</p>
                        <p style={{ background: '#3E7290', padding: '3px', borderRadius: '10px', width: '100%', margin: '0'}}>100 EMG Record</p>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow className='mt-2 mb-2'>
                <IonCol className='text-center'>
                  <IonButton className='mt-0' style={{width: '40%', borderRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} color={'secondary'}>Start</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
        </IonCard>
        {/* HEADER END */}

        {/* CONTENT */}
        <IonCard color={'primary'} className='mt-4 mb-4' style={{borderRadius: '25px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} >
          <IonCardContent>
            <SignalChart/>
          </IonCardContent>
          <IonCardContent style={{background: 'rgba(0,0,0,0.5)'}} >
            <IonCardTitle className='text-center fw-bold fs-6'>Live Record Channel 1 Device 1</IonCardTitle>
          </IonCardContent>
        </IonCard>

        <IonCard color={'primary'} className='mt-3 mb-3' style={{borderRadius: '25px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)', background: 'rgba(0,0,0,0.3)'}} >
          <IonCardHeader>
            <IonCardTitle className='fs-6 fw-bold text-center'>Connected Sportflux EMG</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol className='ms-2 me-2 text-center'>
                  <IonImg src='/Assets/img/IM2.png' style={{ width: '90%', height: 'auto' }} />
                </IonCol>
                <IonCol className='ms-2 me-2 text-center'>
                  <IonImg src='/Assets/img/IM2.png' style={{ width: '90%', height: 'auto' }} />
                </IonCol>
                <IonCol className='ms-2 me-2 text-center'>
                  <IonImg src='/Assets/img/IM2.png' style={{ width: '90%', height: 'auto' }} />
                </IonCol>
                <IonCol className='ms-2 me-2 text-center'>
                  <IonImg src='/Assets/img/IM2.png' style={{ width: '90%', height: 'auto' }} />
                </IonCol>
                <IonCol className='ms-2 me-2 text-center'>
                  <IonImg src='/Assets/img/IM2.png' style={{ width: '90%', height: 'auto' }} />
                </IonCol>
                <IonCol className='ms-2 me-2 text-center'>
                  <IonImg src='/Assets/img/IM2.png' style={{ width: '90%', height: 'auto' }} />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className='ms-2 me-2 text-center'>A1</IonCol>
                <IonCol className='ms-2 me-2 text-center'>A2</IonCol>
                <IonCol className='ms-2 me-2 text-center'>A3</IonCol>
                <IonCol className='ms-2 me-2 text-center'>A4</IonCol>
                <IonCol className='ms-2 me-2 text-center'>A6</IonCol>
                <IonCol className='ms-2 me-2 text-center'>A7</IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <IonCard color={'primary'} className='mt-4 mb-4' style={{borderRadius: '25px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)', background: 'rgba(0,0,0,0.3)'}} >
          <IonCardContent>
            <IonGrid>
              <IonRow className="justify-content-center">
                <IonCol className='square-box ms-2 me-2 d-flex align-items-center justify-content-center' style={{background: '#122D3B', width: '100px', height: '100px', borderRadius: '15px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}}>
                  <IonRouterLink href='/physiotherapist'>
                    <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                      <IonImg src='/Assets/icons/Physiotherapist.png' style={{width: '50%', height: 'auto'}} />
                    </div>
                  </IonRouterLink>
                </IonCol>
                <IonCol className='square-box ms-2 me-2 d-flex align-items-center justify-content-center' style={{background: '#122D3B', width: '100px', height: '100px', borderRadius: '15px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}}>
                  <IonRouterLink href='/trainer'>
                    <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                      <IonImg src='/Assets/icons/Trainer.png' style={{width: '50%', height: 'auto'}} />
                    </div>
                  </IonRouterLink>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        {/* CONTENT END */}
      </IonContent>
    </IonPage>
  )
};

export default Home;
