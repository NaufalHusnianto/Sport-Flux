import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { analytics, batteryHalf, desktop, ellipse, home, homeOutline, person, power, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import DeviceManager from './pages/DeviceManager';
import ActivityTab from './pages/ActivityTab';
import Tab3 from './pages/Tab3';
import UserProfile from './pages/Profile';
import Login from './pages/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/device-manager">
            <DeviceManager />
          </Route>
          <Route exact path="/activity">
            <ActivityTab />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/profile">
            <UserProfile />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
          </IonTabButton>
          <IonTabButton tab="DeviceManager" href="/device-manager">
            <IonIcon aria-hidden="true" icon={desktop} />
          </IonTabButton>
          <IonTabButton tab="activity" href="/activity">
            <IonIcon aria-hidden="true" icon={analytics} />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={batteryHalf} />
          </IonTabButton>
          <IonTabButton tab="UserProfile" href="/profile">
            <IonIcon aria-hidden="true" icon={person} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
