import { IonContent, IonCardTitle, IonIcon, IonHeader, IonPage, IonGrid, IonRow, IonCol, IonImg, IonCard, IonButton, IonToolbar, IonCardHeader, IonCardContent, IonList, IonItem } from '@ionic/react';
import { settings } from 'ionicons/icons';
import { logoutUser } from '../config/firebase/firebaseConfig';
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
                  <IonImg src='/Assets/img/LOGO.png' style={{ width: '30%', height: 'auto' }} />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size='4' className='w-100 h-100'>
                  <IonImg src='/Assets/img/profile.png' style={{ background: 'green', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)', borderRadius: '20px' }}/>
                </IonCol>
                <IonCol size='8'>
                  <IonCard className='w-100 p-2 pb-3' color={'secondary'} style={{borderRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)', margin: 0}}>
                        <IonRow>
                            <IonCol size='auto'>
                                <p className='mt-0 mb-1'>SportFlux User 1</p>
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
                  <IonButton className='mt-0 w-50' style={{borderRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} color={'secondary'}>Change Profile</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
        </IonCard>
        <IonCard className='ion-no-border mt-4 m-0' style={{ borderRadius: '50px', background: 'rgba(0, 0, 0, 0.3)', boxShadow: '2px 2px 5px #0b0b0b', zIndex: 9999}}>
            <IonCardHeader className='p-3 m-4' style={{borderRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} color={'secondary'}>
               <IonCardTitle className='ion-text-center' style={{ fontSize: '20px' }}>My Activity</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList style={{background: 'transparent'}}>

                    <IonItem className='m-2 mt-0' style={{borderRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} color={'secondary'}>
                        <IonGrid fixed={true}>

                                    <IonRow className='mt-2'>
                                        <IonCol size='6' className='ion-text-center'>
                                            <p style={{ background: '#008100', fontSize:'16px', width: 'fit-content', padding: '10px', borderRadius: '15px', margin: 'auto', fontWeight: 'bold' }}>EMG Record</p>
                                        </IonCol>
                                        <IonCol></IonCol>
                                        <IonCol size='auto'>
                                            <IonImg src='/exclusive_icon.png' style={{width: '50px'}}/>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow className='mb-2'>
                                        <IonCol size='3' className='m-0'>
                                            <IonImg src='/pulse.png' className='m-auto' style={{ border: '2px solid #fff', width: '100%', borderRadius: '10px'}}/>
                                        </IonCol>
                                        <IonCol style={{ fontSize: '13px' }}>
                                            <IonRow>
                                                <IonCol size='4'>Devices</IonCol>
                                                <IonCol size='1'>:</IonCol>
                                                <IonCol size='5'>5</IonCol>
                                            </IonRow>
                                            <IonRow>
                                                <IonCol size='4'>Channel</IonCol>
                                                <IonCol size='1'>:</IonCol>
                                                <IonCol size='5'>10</IonCol>
                                            </IonRow>
                                            <IonRow>
                                                <IonCol size='4'>Status</IonCol>
                                                <IonCol size='1'>:</IonCol>
                                                <IonCol size='6'>Diagnosed</IonCol>
                                            </IonRow>
                                        </IonCol>
                                    </IonRow>
                        </IonGrid>
                    </IonItem>

                    <IonItem className='m-2 mt-4' style={{borderRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} color={'secondary'}>
                        <IonGrid fixed={true}>

                                    <IonRow className='mt-2'>
                                        <IonCol size='6' className='ion-text-center'>
                                            <p style={{ background: '#008100', fontSize:'16px', width: 'fit-content', padding: '10px', borderRadius: '15px', margin: 'auto', fontWeight: 'bold' }}>EMG Record</p>
                                        </IonCol>
                                        <IonCol></IonCol>
                                        <IonCol size='auto'>
                                            <IonImg src='/premium_icon.png' style={{width: '50px'}}/>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow className='mb-2'>
                                        <IonCol size='3' className='m-0'>
                                            <IonImg src='/pulse.png' className='m-auto' style={{ border: '2px solid #fff', width: '100%', borderRadius: '10px'}}/>
                                        </IonCol>
                                        <IonCol style={{ fontSize: '13px' }}>
                                            <IonRow>
                                                <IonCol size='4'>Devices</IonCol>
                                                <IonCol size='1'>:</IonCol>
                                                <IonCol size='5'>3</IonCol>
                                            </IonRow>
                                            <IonRow>
                                                <IonCol size='4'>Channel</IonCol>
                                                <IonCol size='1'>:</IonCol>
                                                <IonCol size='5'>6</IonCol>
                                            </IonRow>
                                            <IonRow>
                                                <IonCol size='4'>Status</IonCol>
                                                <IonCol size='1'>:</IonCol>
                                                <IonCol size='6'>Recorded</IonCol>
                                            </IonRow>
                                        </IonCol>
                                    </IonRow>
                        </IonGrid>
                    </IonItem>

                    <IonItem className='m-2 mt-4' style={{borderRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} color={'secondary'}>
                        <IonGrid fixed={true}>

                                    <IonRow className='mt-2'>
                                        <IonCol size='6' className='ion-text-center'>
                                            <p style={{ background: '#008100', fontSize:'16px', width: 'fit-content', padding: '10px', borderRadius: '15px', margin: 'auto', fontWeight: 'bold' }}>EMG Record</p>
                                        </IonCol>
                                        <IonCol></IonCol>
                                        <IonCol size='auto'>
                                            <IonImg src='/standart_icon.png' style={{width: '50px'}}/>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow className='mb-2'>
                                        <IonCol size='3' className='m-0'>
                                            <IonImg src='/pulse.png' className='m-auto' style={{ border: '2px solid #fff', width: '100%', borderRadius: '10px'}}/>
                                        </IonCol>
                                        <IonCol style={{ fontSize: '13px' }}>
                                            <IonRow>
                                                <IonCol size='4'>Devices</IonCol>
                                                <IonCol size='1'>:</IonCol>
                                                <IonCol size='5'>10</IonCol>
                                            </IonRow>
                                            <IonRow>
                                                <IonCol size='4'>Channel</IonCol>
                                                <IonCol size='1'>:</IonCol>
                                                <IonCol size='5'>20</IonCol>
                                            </IonRow>
                                            <IonRow>
                                                <IonCol size='4'>Status</IonCol>
                                                <IonCol size='1'>:</IonCol>
                                                <IonCol size='6'>Followed</IonCol>
                                            </IonRow>
                                        </IonCol>
                                    </IonRow>
                        </IonGrid>
                    </IonItem>

                </IonList>
            </IonCardContent>
        </IonCard>
        <IonCard className='ion-no-border ps-4 pe-4 text-center' style={{ background: 'transparent', border: 'none', borderRadius: '999px'}}>
            <IonButton onClick={handleLogout} className='mt-4 mb-4 w-100 fs-6' style={{ borderRadius: '999px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} color={'secondary'}>Logout</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
