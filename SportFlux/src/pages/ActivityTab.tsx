import { IonContent, IonHeader, IonCardTitle, IonPage, IonGrid, IonRow, IonCol, IonImg, IonCard, IonToolbar, IonButton } from '@ionic/react';

const ActivityTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent color={'tertiary'}>
        <IonHeader className='ion-no-border mb-4'>
          <IonToolbar style={{ borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', background: 'rgba(0, 0, 0, 0.3)'}} color={'primary'}>
            <IonGrid>
              <IonRow>
                <IonCol className='d-flex justify-content-center align-item-center'>
                  <IonImg src='LOGO.png' style={{ width: '30%', height: 'auto' }} />
                </IonCol>
              </IonRow>
              <IonRow className='mt-0'>
                <IonCol className='text-center'>
                  <IonButton className='mt-0 mb-4 w-100' style={{borderRadius: '20px'}} color={'secondary'}>Diagnose</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>

        <IonCard color={'primary'} style={{ borderRadius: '30px', background: 'rgba(0, 0, 0, 0.3)' }}>
          <IonCardTitle className='text-center mt-3'>
            <p style={{ margin: 'auto', width: '90%', background: '#122D3B' }} className='rounded-pill text-white fs-7 p-1'>My Activity</p>
          </IonCardTitle>

          <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
            <IonGrid>
              <IonRow style={{ display: 'flex', height: '100%', borderRadius: '30px', overflow: 'hidden', background: '#122D3B' }}>
                <IonCol size='5' className='text-center text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1' }}>
                  <p style={{background: 'green'}} className='rounded-pill text-white'>EMG Record</p>
                  <IonImg src='pulse.png' style={{width: '50%'}} className='m-2'/>
                </IonCol>
                <IonCol size='7' className='text-left text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1' }}>
                  <p className='m-0'>Device : 5</p>
                  <p className='m-0'>Channel : 10</p>
                  <p className='m-0'>Status : Diagnosed</p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>

          <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
            <IonGrid>
              <IonRow style={{ display: 'flex', height: '100%', borderRadius: '30px', overflow: 'hidden', background: '#122D3B' }}>
                <IonCol size='5' className='text-center text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1' }}>
                  <p style={{background: 'green'}} className='rounded-pill text-white'>EMG Record</p>
                  <IonImg src='pulse.png' style={{width: '50%'}} className='m-2'/>
                </IonCol>
                <IonCol size='7' className='text-left text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1' }}>
                  <p className='m-0'>Device : 5</p>
                  <p className='m-0'>Channel : 10</p>
                  <p className='m-0'>Status : Diagnosed</p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>

          <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
            <IonGrid>
              <IonRow style={{ display: 'flex', height: '100%', borderRadius: '30px', overflow: 'hidden', background: '#122D3B' }}>
                <IonCol size='5' className='text-center text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1' }}>
                  <p style={{background: 'green'}} className='rounded-pill text-white'>EMG Record</p>
                  <IonImg src='pulse.png' style={{width: '50%'}} className='m-2'/>
                </IonCol>
                <IonCol size='7' className='text-left text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1' }}>
                  <p className='m-0'>Device : 5</p>
                  <p className='m-0'>Channel : 10</p>
                  <p className='m-0'>Status : Diagnosed</p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>

          <IonCard color={'primary'} style={{background: 'rgba(0,0,0,0)', boxShadow: 'none'}}>
            <IonGrid>
              <IonRow style={{ display: 'flex', height: '100%', borderRadius: '30px', overflow: 'hidden', background: '#122D3B' }}>
                <IonCol size='5' className='text-center text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1' }}>
                  <p style={{background: 'green'}} className='rounded-pill text-white'>EMG Record</p>
                  <IonImg src='pulse.png' style={{width: '50%'}} className='m-2'/>
                </IonCol>
                <IonCol size='7' className='text-left text-white p-3 d-flex flex-column justify-content-center' style={{ flex: '1' }}>
                  <p className='m-0'>Device : 5</p>
                  <p className='m-0'>Channel : 10</p>
                  <p className='m-0'>Status : Diagnosed</p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>

        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ActivityTab;
