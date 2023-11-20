import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'secondary'}>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonImg src='LOGO.png' id='logo'></IonImg>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonImg src='profile.png' id='photo-profile'></IonImg>
              </IonCol>
              <IonCol>
                <IonCard id='profile-data'>
                  <p>SportFlux User 1</p>
                  <p id='health-indicator'>80% healthy</p>
                  <p id='emg-record'>100 EMG Record</p>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent color={'tertiary'}>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Sport Flux</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
};

export default Tab1;
