import { IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonImg src='LOGO.png' id='logoHeader'></IonImg>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent color={'secondary'} fullscreen>

      </IonContent>
    </IonPage>
  );
};


export default Home;
