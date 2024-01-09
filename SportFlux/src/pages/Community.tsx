import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import "bootstrap/dist/css/bootstrap.min.css";
import SignalChart from '../components/SignalChart';

const Community: React.FC = () => {
  return (
    <IonPage>
      <IonContent color={'tertiary'}>
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
      </IonContent>
    </IonPage>
  )
};

export default Community;
