import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SignalChart from '../components/SignalChart';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent color={'tertiary'}>
        {/* HEADER */}
        <IonHeader className='ion-no-border' color={'primary'}>
          <IonToolbar id='header'>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonImg src='LOGO.png' id='logo'></IonImg>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size='4' className='photo-card'>
                  <IonImg src='profile.png' id='photo-profile'></IonImg>
                </IonCol>
                <IonCol size='8' className='profile-card'>
                  <IonCard id='profile-data' color={'secondary'}>
                    <p>SportFlux User 1</p>
                    <p id='health-indicator'>80% healthy</p>
                    <p id='emg-record'>100 EMG Record</p>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton id='btn-dashboard' color={'secondary'}>Dashboard</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        {/* HEADER END */}

        {/* CONTENT */}
        <IonCard color={'primary'} style={{borderRadius: '25px'}} className='mt-4 mb-4'>
          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
          <IonCardHeader>
            <IonCardTitle className='text-center fw-bold fs-6'>Live Record Channel 1 Device 1</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard color={'primary'} style={{borderRadius: '25px'}}>
          <IonCardHeader>
            <IonCardTitle className='fs-6 fw-bold text-center'>Connected Sportflux EMG</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol className='ms-2 me-2 text-center'>
                  <IonImg src='/IM2.png' style={{ width: '90%', height: 'auto' }} />
                </IonCol>
                <IonCol className='ms-2 me-2 text-center'>
                  <IonImg src='/IM2.png' style={{ width: '90%', height: 'auto' }} />
                </IonCol>
                <IonCol className='ms-2 me-2 text-center'>
                  <IonImg src='/IM2.png' style={{ width: '90%', height: 'auto' }} />
                </IonCol>
                <IonCol className='ms-2 me-2 text-center'>
                  <IonImg src='/IM2.png' style={{ width: '90%', height: 'auto' }} />
                </IonCol>
                <IonCol className='ms-2 me-2 text-center'>
                  <IonImg src='/IM2.png' style={{ width: '90%', height: 'auto' }} />
                </IonCol>
                <IonCol className='ms-2 me-2 text-center'>
                  <IonImg src='/IM2.png' style={{ width: '90%', height: 'auto' }} />
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

        <IonCard color={'primary'} style={{borderRadius: '25px'}}>
          <IonCardContent>
            <IonGrid>
              <IonRow className="justify-content-center">
                <IonCol className='square-box ms-2 me-2 d-flex align-items-center justify-content-center' style={{background: '#122D3B', width: '100px', height: '100px', borderRadius: '15px'}}>
                  <IonImg src='/Comunity.png' style={{width: '80%', height: 'auto'}} />
                </IonCol>
                <IonCol className='square-box ms-2 me-2 d-flex align-items-center justify-content-center' style={{background: '#122D3B', width: '100px', height: '100px', borderRadius: '15px'}}>
                  <IonImg src='/Physiotherapist.png' style={{width: '80%', height: 'auto'}} />
                </IonCol>
                <IonCol className='square-box ms-2 me-2 d-flex align-items-center justify-content-center' style={{background: '#122D3B', width: '100px', height: '100px', borderRadius: '15px'}}>
                  <IonImg src='/Trainer.png' style={{width: '80%', height: 'auto'}} />
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
