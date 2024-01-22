import { IonContent, IonCardTitle, IonIcon, IonHeader, IonPage, IonGrid, IonRow, IonCol, IonImg, IonCard, IonButton, IonToolbar } from '@ionic/react';
import { settings } from 'ionicons/icons';
import { logoutUser } from '../firebaseConfig';
import { useHistory } from "react-router-dom";

const UserProfile: React.FC = () => {
  const history = useHistory();
    const handleLogout = async () => {
    const success = await logoutUser();
    if (success) {
      history.push('/login')
      console.log('Logout successful');
    } else {
      console.log('Logout failed');
    }
  }
  return (
    <IonPage>
      <IonContent color={'tertiary'}>
        <IonCard className='ion-no-border m-0' style={{ borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '2px 2px 5px #0b0b0b', zIndex: 9999}}>
            <IonGrid>
              <IonRow>
                <IonCol className='d-flex justify-content-center align-item-center'>
                  <IonImg src='LOGO.png' style={{ width: '30%', height: 'auto' }} />
                </IonCol>
              </IonRow>
              <IonRow>
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
              <IonRow className='mt-0'>
                <IonCol className='text-center'>
                  <IonButton className='mt-0 mb-4 w-100' style={{borderRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} color={'secondary'}>Change Profile</IonButton>
                </IonCol>
                <IonCol>
                  <IonButton onClick={handleLogout} className='mt-0 mb-4 w-100' style={{borderRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} color={'secondary'}>Logout</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
