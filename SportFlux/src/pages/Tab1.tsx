import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar color={'#346481'}>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color={'secondary'} fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
