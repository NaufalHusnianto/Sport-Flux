import { IonContent, IonCardTitle, IonIcon, IonHeader, IonPage, IonGrid, IonRow, IonCol, IonImg, IonCard, IonButton, IonToolbar, IonCardHeader, IonCardContent, IonList, IonItem, IonText, IonAccordion, IonAccordionGroup, IonLabel } from '@ionic/react';
import { settings, chevronForwardOutline, settingsOutline, carOutline, chatbubbleEllipsesOutline, helpCircleOutline, giftOutline, ribbonOutline, heartOutline, timeOutline, cubeOutline, walletOutline, cartOutline, clipboardOutline } from 'ionicons/icons';
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
        <IonCard className='ion-no-border m-0' style={{ background: 'transparent', boxShadow: 'none'}}>
            <IonGrid className='p-0 ion-margin-top ion-no-border' style={{ boxShadow: 'white' }}>
                <IonRow style={{ alignItems:'top' }}>
                    <IonCol className='p-0' size='3'>
                        <IonRow className='p-1' style={{ display: 'flex', justifyContent: 'space-around', alignItems:'center', backgroundColor:'white', borderRadius:'0 20px 20px 0', color:'var(--ion-color-tertiary)' }}>
                            <IonText color='tertiary'>
                                <p className='m-0' style={{ fontWeight:'bold'}}>Start</p>
                            </IonText>
                            <IonIcon icon={chevronForwardOutline} color='tertiary'></IonIcon>
                        </IonRow>
                    </IonCol>
                    <IonCol></IonCol>
                    <IonCol size='auto' style={{ marginRight:'20px'}}>
                        <IonIcon icon={cartOutline} color='light' style={{ fontSize:'35px'}}></IonIcon>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <img src='./profile.png' style={{ backgroundColor:'white', borderRadius:'100%', width:'100px', margin:'auto'}}></img>
                </IonRow>
                <IonRow>
                    <h1 style={{ margin:'10px auto 0px', fontSize:'30px', color:'white' }}>Clara Alverina</h1>
                </IonRow>
                <IonRow>
                    <IonText className='m-auto' color='tertiary'>
                        <h6 style={{ backgroundColor:'white', padding:'4px 20px', borderRadius:'20px' }}>Classic Member</h6>
                    </IonText>
                </IonRow>
                <IonRow>
                   <p style={{ margin:'10px auto', color:'white' }}>1.232 Points</p>
                </IonRow>
                <IonRow className='mt-2'>
                    <IonCol>
                        <IonText color="tertiary">
                            <p style={{ padding:'7px 10px', backgroundColor:'white', textAlign:'center', margin:'0px 10px 0px 35px', borderRadius:'15px', fontSize:'13px' }}>Follower: <strong>0</strong></p>
                        </IonText>
                    </IonCol>
                    <IonCol>
                        <IonText color="tertiary">
                            <p style={{ padding:'7px 10px', backgroundColor:'white', textAlign:'center', margin:'0px 10px 0px 35px', borderRadius:'15px', fontSize:'13px' }}>Following: <strong>234</strong></p>
                        </IonText>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
        <IonCard className='ion-no-border mt-4 m-0' color='light' style={{ borderRadius: '40px 40px 0 0' }}>
            <IonGrid className='m-3'>
                <IonRow style={{ alignItems:'center', justifyContent:'center', borderBottom:'1px solid black'}}>
                    <IonCol size='auto'>
                        <IonText>
                            <IonIcon icon={clipboardOutline} style={{ fontSize:'25px' }}></IonIcon>
                        </IonText>
                    </IonCol>
                    <IonCol>
                        <IonText className='m-0'>
                            <p style={{ marginBottom: '0px' }}><strong>My Purchases</strong></p>
                        </IonText>
                    </IonCol>
                    <IonCol className='m-0'>
                        <IonText style={{ fontSize:'12px', textAlign:'right', fontWeight:'light' }}>
                            <p style={{ marginBottom: '0px' }}>View Purchase History</p>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow className='mt-3'>
                    <IonCol style={{ textAlign:'center' }}>
                        <IonIcon icon={walletOutline} style={{ fontSize:'40px', textAlign:'center' }}></IonIcon>
                        <p>To Pay</p>
                    </IonCol>
                    <IonCol style={{ textAlign:'center' }}>
                        <IonIcon icon={carOutline} style={{ fontSize:'40px', textAlign:'center' }}></IonIcon>
                        <p>To Shop</p>
                    </IonCol>
                    <IonCol style={{ textAlign:'center' }}>
                        <IonIcon icon={cubeOutline} style={{ fontSize:'40px', textAlign:'center' }}></IonIcon>
                        <p>To Receive</p>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonAccordionGroup>
                  <IonAccordion value="first">
                    <IonItem slot="header" color="light">
                        <IonIcon icon={heartOutline} className='pe-2'></IonIcon>
                      <IonLabel><strong>Liked</strong></IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      First Content
                    </div>
                  </IonAccordion>
                  <IonAccordion value="first">
                    <IonItem slot="header" color="light">
                        <IonIcon icon={timeOutline} className='pe-2'></IonIcon>
                      <IonLabel><strong>Recently Viewed</strong></IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      First Content
                    </div>
                  </IonAccordion>
                  <IonAccordion value="first">
                    <IonItem slot="header" color="light">
                        <IonIcon icon={ribbonOutline} className='pe-2'></IonIcon>
                      <IonLabel><strong>Loyalty</strong></IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      First Content
                    </div>
                  </IonAccordion>
                  <IonAccordion value="first">
                    <IonItem slot="header" color="light">
                        <IonIcon icon={giftOutline} className='pe-2'></IonIcon>
                      <IonLabel><strong>Gift Voucher</strong></IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      First Content
                    </div>
                  </IonAccordion>
                  <IonAccordion value="first">
                    <IonItem slot="header" color="light">
                        <IonIcon icon={settingsOutline} className='pe-2'></IonIcon>
                      <IonLabel><strong>Account Setting</strong></IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      First Content
                    </div>
                  </IonAccordion>
                  <IonAccordion value="first">
                    <IonItem slot="header" color="light">
                        <IonIcon icon={helpCircleOutline} className='pe-2'></IonIcon>
                      <IonLabel><strong>Help Centre</strong></IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      First Content
                    </div>
                  </IonAccordion>
                  <IonAccordion value="first">
                    <IonItem slot="header" color="light">
                        <IonIcon icon={chatbubbleEllipsesOutline} className='pe-2'></IonIcon>
                      <IonLabel><strong>Chat with Sportflux</strong></IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      First Content
                    </div>
                  </IonAccordion>
            </IonAccordionGroup>
            <IonButton onClick={handleLogout} className='mt-4 mb-4 w-100' style={{borderRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} color={'secondary'}>Logout</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
