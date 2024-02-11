import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import "bootstrap/dist/css/bootstrap.min.css";
import SignalChart from '../components/SignalChart';
import { BsTelegram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsChatRightTextFill } from "react-icons/bs";

const Community: React.FC = () => {
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
                <IonCol size='4'>
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
                  <IonButton className='mt-0 w-50' style={{borderRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)'}} color={'secondary'}>Community</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
        </IonCard>

        {/* content  */}
        <IonGrid>
          <IonRow className='d-flex justify-content-center'>
            <IonCol size='6'>
              <IonCard color={'secondary'} className='d-flex justify-content-center flex-column text-center'>
                <BsWhatsapp style={{fontSize: "50px", marginLeft: "35%", marginTop: "10%", marginBottom: "10%"}}/>
                <p>Whatsapp</p>
              </IonCard>
            </IonCol>
            <IonCol size='6'>
              <IonCard color={'secondary'} className='d-flex flex-column text-center'>
                <BsTelegram style={{fontSize: "50px", marginLeft: "35%", marginTop: "10%", marginBottom: "10%"}}/>
                <p>Telegram</p>
              </IonCard>
            </IonCol>
          </IonRow>
          {/* forum  */}
          <IonRow>
            <IonCol size='12'>
              <IonCard color={'secondary'} className='d-flex align-items-center' style={{fontSize:"13pt", fontWeight:"bold"}}>
                <BsChatRightTextFill style={{fontSize:"25px", margin:"15px"}} />
                <p style={{ margin: 0, alignSelf: 'center' }}>Football Community</p>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size='12'>
              <IonCard color={'secondary'} className='d-flex align-items-center' style={{fontSize:"13pt", fontWeight:"bold"}}>
                <BsChatRightTextFill style={{fontSize:"25px", margin:"15px"}} />
                <p style={{ margin: 0, alignSelf: 'center' }}>Swimming Community</p>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size='12'>
              <IonCard color={'secondary'} className='d-flex align-items-center' style={{fontSize:"13pt", fontWeight:"bold"}}>
                <BsChatRightTextFill style={{fontSize:"25px", margin:"15px"}} />
                <p style={{ margin: 0, alignSelf: 'center' }}>Athletic Community</p>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size='12'>
              <IonCard color={'secondary'} className='d-flex align-items-center' style={{fontSize:"13pt", fontWeight:"bold"}}>
                <BsChatRightTextFill style={{fontSize:"25px", margin:"15px"}} />
                <p style={{ margin: 0, alignSelf: 'center' }}>Fitness Community</p>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size='12'>
              <IonCard color={'secondary'} className='d-flex align-items-center' style={{fontSize:"13pt", fontWeight:"bold"}}>
                <BsChatRightTextFill style={{fontSize:"25px", margin:"15px"}} />
                <p style={{ margin: 0, alignSelf: 'center' }}>Running Community</p>
              </IonCard>
            </IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>
    </IonPage>
  )
};

export default Community;
