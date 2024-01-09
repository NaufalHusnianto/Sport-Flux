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
import { analytics, batteryHalf, desktop, ellipse, home, homeOutline, paperPlane, people, peopleOutline, person, power, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import DeviceManager from './pages/DeviceManager';
import ActivityTab from './pages/ActivityTab';
import UserProfile from './pages/Profile';
import Login from './pages/Login';
import Physiotherapist from './pages/Physiotherapist';
import ForgetPassword from './pages/ForgetPassword';
import Community from './pages/Community';
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
import "bootstrap/dist/css/bootstrap.min.css";
import Trainer from './pages/Trainer';


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
          <Route exact path="/community">
            <Community/>
          </Route>
          <Route exact path="/profile">
            <UserProfile />
          </Route>
          <Route exact path="/physiotherapist">
            <Physiotherapist />
          </Route>
          <Route exact path="/trainer">
            <Trainer />
          </Route>
          <Route exact path="/forgetpassword">
            <ForgetPassword />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className='custom-tab-bar'>
          <IonTabButton tab="Home" href="/home">
            <IonIcon aria-hidden="true" icon={home} color='light'/>
          </IonTabButton>
          <IonTabButton tab="DeviceManager" href="/device-manager">
            <IonIcon aria-hidden="true" icon={desktop} color='light'/>
          </IonTabButton>
          <IonTabButton tab="activity" href="/activity">
            <div className='text-white text-center fs-1 p-1 w-100 h-100' style={{background: '#122D3B', borderBottomRightRadius: '9999px', borderBottomLeftRadius: '9999px', border: 'solid 2px white'}}>
              <IonIcon aria-hidden="true" icon={analytics} color='light'/>
            </div>
          </IonTabButton>
          <IonTabButton tab="community" href="/community">
            <IonIcon aria-hidden="true" icon={people} color='light'/>
          </IonTabButton>
          <IonTabButton tab="UserProfile" href="/profile">
            <IonIcon aria-hidden="true" icon={person} color='light'/>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
