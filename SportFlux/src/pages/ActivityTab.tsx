import { IonContent, IonCardTitle, IonIcon, IonHeader, IonPage, IonGrid, IonRow, IonCol, IonImg, IonCard, IonButton, IonToolbar } from '@ionic/react';
import ActivityRecord from '../components/ActivityRecord';

const ActivityTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent color={'tertiary'}>
      <IonImg src="/IM2.png" style={{ position: 'fixed', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: 'auto', opacity: 0.15 , zIndex: -1}} />
        <IonCard className='ion-no-border m-0' style={{ position: 'absolute', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '2px 2px 5px #0b0b0b', zIndex: 9999}}>
              <IonGrid>
                <IonRow>
                  <IonCol className='d-flex justify-content-center align-item-center'>
                    <IonImg src='LOGO.png' style={{ width: '30%', height: 'auto' }} />
                  </IonCol>
                </IonRow>
                <IonRow className='mb-4'>
                  <IonCol size='4' className='w-100 h-100'>
                    <IonImg src='/profile.png' style={{ background: 'green', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)', borderRadius: '20px' }}/>
                  </IonCol>
                  <IonCol size='8'>
                    <IonCard className='w-100 p-2 pb-3' color={'secondary'} style={{borderRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}}>
                      <p className='mt-0 mb-1'>SportFlux User 1</p>
                      <p style={{ background: '#008100', padding: '3px', borderRadius: '10px', width: '80%', marginBottom: '5px'}}>80% healthy</p>
                      <p style={{ background: '#3E7290', padding: '3px', borderRadius: '10px', width: '100%', margin: '0'}}>100 EMG Record</p>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </IonGrid>
        </IonCard>

          <IonCard color={'primary'} style={{ top: '25vh', borderRadius: '30px', background: 'rgba(0, 0, 0, 0.5)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }}>
            <IonCardTitle className='text-center mt-3 mb-3'>
              <p style={{ margin: 'auto', width: '90%', background: '#122D3B', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }} className='rounded-pill text-white fs-7 p-1'>My Activity</p>
            </IonCardTitle>

            {/* Import dari ActivityRecord */}
            <ActivityRecord />
            <ActivityRecord />
            <ActivityRecord />
            <ActivityRecord />
            <ActivityRecord />
            <ActivityRecord />
          
          </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ActivityTab;
