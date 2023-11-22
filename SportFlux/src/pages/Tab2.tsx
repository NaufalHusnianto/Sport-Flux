import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar  } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        {/* header  */}
        <IonHeader className='ion-no-border'>
          <IonToolbar id='header'>
            <IonGrid >
            <IonRow>
                <IonCol>
                  <IonImg src='LOGO.png' id='logo'></IonImg>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size='3' class='icon-header'>
                  <IonImg src='T11.png' id='img-icon'></IonImg>
                </IonCol>
                <IonCol size='7' class='icon-header-info' >
                  <IonRow>
                    <IonCol>
                    <p>20</p>
                    </IonCol>
                    <IonCol>
                    <p>20</p>
                    </IonCol>
                  </IonRow>
                </IonCol>
            </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>

      {/* content */}
      <IonCard id='owned-device'>
          <IonCardTitle id='title-owned-device'>
            OWNED DEVICE
          </IonCardTitle>

          <IonCard>
            <IonGrid>
              <IonRow>
                <IonCol size='4' class='img-owned-device '>
                  <IonImg src='IM1.png' id='img-od'></IonImg>
                </IonCol>
                <IonCol size='7' class='owned-device-content'>
                  <IonCard className='card-owned-device'>
                    <IonCardTitle id='title-od-card'>A1</IonCardTitle>
                    <p id='od-duration'>Duration : 00:05:12</p>
                      <p id='od-datastream'>Data Stream : 2 MB</p>
                      <p id='od-battery'>Battery Level : 100%</p>
                      <p id='od-status'>Status : active</p>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          
          <IonCard>
            <IonGrid>
              <IonRow>
                <IonCol size='4' class='img-owned-device '>
                  <IonImg src='IM1.png' id='img-od'></IonImg>
                </IonCol>
                <IonCol size='7' class='owned-device-content'>
                  <IonCard className='card-owned-device'>
                    <IonCardTitle id='title-od-card'>A1</IonCardTitle>
                    <p id='od-duration'>Duration : 00:05:12</p>
                      <p id='od-datastream'>Data Stream : 2 MB</p>
                      <p id='od-battery'>Battery Level : 100%</p>
                      <p id='od-status'>Status : active</p>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          
          <IonCard>
            <IonGrid>
              <IonRow>
                <IonCol size='4' class='img-owned-device '>
                  <IonImg src='IM1.png' id='img-od'></IonImg>
                </IonCol>
                <IonCol size='7' class='owned-device-content'>
                  <IonCard className='card-owned-device'>
                    <IonCardTitle id='title-od-card'>A1</IonCardTitle>
                    <p id='od-duration'>Duration : 00:05:12</p>
                      <p id='od-datastream'>Data Stream : 2 MB</p>
                      <p id='od-battery'>Battery Level : 100%</p>
                      <p id='od-status'>Status : active</p>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          
          <IonCard>
            <IonGrid>
              <IonRow>
                <IonCol size='4' class='img-owned-device '>
                  <IonImg src='IM1.png' id='img-od'></IonImg>
                </IonCol>
                <IonCol size='7' class='owned-device-content'>
                  <IonCard className='card-owned-device'>
                    <IonCardTitle id='title-od-card'>A1</IonCardTitle>
                    <p id='od-duration'>Duration : 00:05:12</p>
                      <p id='od-datastream'>Data Stream : 2 MB</p>
                      <p id='od-battery'>Battery Level : 100%</p>
                      <p id='od-status'>Status : active</p>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          
          <IonCard>
            <IonGrid>
              <IonRow>
                <IonCol size='4' class='img-owned-device '>
                  <IonImg src='IM1.png' id='img-od'></IonImg>
                </IonCol>
                <IonCol size='7' class='owned-device-content'>
                  <IonCard className='card-owned-device'>
                    <IonCardTitle id='title-od-card'>A1</IonCardTitle>
                    <p id='od-duration'>Duration : 00:05:12</p>
                      <p id='od-datastream'>Data Stream : 2 MB</p>
                      <p id='od-battery'>Battery Level : 100%</p>
                      <p id='od-status'>Status : active</p>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          
      </IonCard>

      </IonContent>

      
    </IonPage>
  );
};

export default Tab2;
