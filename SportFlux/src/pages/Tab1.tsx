import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        {/* HEADER */}
        <IonHeader className='ion-no-border'>
          <IonToolbar id='header'>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonImg src='LOGO.png' id='logo'></IonImg>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size='4' className='photo-card'>
                  <IonImg src='profile.png' id='photo-profile'></IonImg>
                </IonCol>
                <IonCol size='8' className='profile-card'>
                  <IonCard id='profile-data'>
                    <p>SportFlux User 1</p>
                    <p id='health-indicator'>80% healthy</p>
                    <p id='emg-record'>100 EMG Record</p>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton id='btn-dashboard'>Dashboard</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        {/* HEADER END */}

        {/* CONTENT */}
        <IonCard id='live-record'>
          <IonCardHeader>
            <IonCardTitle>Sport Flux</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        </IonCard>

        <IonCard id='live-record'>
          <IonCardHeader>
            <IonCardTitle>Sport Flux</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        </IonCard>

        <IonCard id='live-record'>
          <IonCardHeader>
            <IonCardTitle>Sport Flux</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        </IonCard>
        {/* CONTENT END */}
      </IonContent>
    </IonPage>
  )
};

export default Tab1;
