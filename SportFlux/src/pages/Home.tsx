import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import "bootstrap/dist/css/bootstrap.min.css";
import SignalChart from '../components/SignalChart';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent color={'tertiary'}>
        {/* HEADER */}
        <IonHeader className='ion-no-border'>
          <IonToolbar style={{ borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', background: 'rgba(0, 0, 0, 0.3)'}} color={'primary'}>
            <IonGrid>
              <IonRow>
                <IonCol className='d-flex justify-content-center align-item-center'>
                  <IonImg src='LOGO.png' style={{ width: '30%', height: 'auto' }} />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size='4'>
                  <IonImg src='/profile.png' style={{ background: 'green', boxShadow: '2px 2px black', borderRadius: '20px' }}/>
                </IonCol>
                <IonCol size='8'>
                  <IonCard className='w-100 p-2 pb-3 ' color={'secondary'} style={{borderRadius: '20px', background: 'rgba(0, 0, 0, 0.5)'}}>
                    <p className='mt-0 mb-1'>SportFlux User 1</p>
                    <p style={{ background: '#008100', padding: '3px', borderRadius: '10px', width: '80%', marginBottom: '5px'}}>80% healthy</p>
                    <p style={{ background: '#3E7290', padding: '3px', borderRadius: '10px', width: '100%', margin: '0'}}>100 EMG Record</p>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow className='mt-0'>
                <IonCol className='text-center'>
                  <IonButton className='mt-0 mb-3' style={{borderRadius: '20px', width: '80%'}} color={'secondary'}>Dashboard</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        {/* HEADER END */}

        {/* CONTENT */}
        <IonCard color={'primary'} className='mt-4 mb-4' style={{borderRadius: '25px', background: 'rgba(0, 0, 0, 0.3)'}} >
          <IonCardContent>
            <SignalChart/>
          </IonCardContent>
          <IonCardContent style={{background: '#122D3B'}} >
            <IonCardTitle className='text-center fw-bold fs-6'>Live Record Channel 1 Device 1</IonCardTitle>
          </IonCardContent>
        </IonCard>

        <IonCard color={'primary'} className='mt-3 mb-3' style={{borderRadius: '25px', background: 'rgba(0, 0, 0, 0.3)'}}>
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

        <IonCard color={'primary'} className='mb-3 mt-3' style={{borderRadius: '25px', background: 'rgba(0, 0, 0, 0.3)'}}>
          <IonCardContent>
            <IonGrid>
              <IonRow className="justify-content-center">
                <IonCol className='square-box ms-2 me-2 d-flex align-items-center justify-content-center' style={{background: '#122D3B', width: '100px', height: '100px', borderRadius: '15px'}}>
                  <IonImg src='/Comunity.png' style={{width: '80%', height: 'auto'}} />
                </IonCol>
                <IonCol className='square-box ms-2 me-2 d-flex align-items-center justify-content-center' style={{background: '#122D3B', width: '100px', height: '100px', borderRadius: '15px'}}>
                  <IonRouterLink href='/physiotherapist'>
                    <IonImg src='/Physiotherapist.png' style={{width: '80%', height: 'auto'}} />
                  </IonRouterLink>
                </IonCol>
                <IonCol className='square-box ms-2 me-2 d-flex align-items-center justify-content-center' style={{background: '#122D3B', width: '100px', height: '100px', borderRadius: '15px'}}>
                  <IonRouterLink href='/trainer'>
                    <IonImg src='/Trainer.png' style={{width: '80%', height: 'auto'}} />
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
