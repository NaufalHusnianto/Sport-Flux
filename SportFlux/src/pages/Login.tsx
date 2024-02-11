import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonButton,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import {
  lockClosedOutline,
  logInSharp,
  mailOutline,
  personAddOutline
} from 'ionicons/icons';
import { loginUser } from '../config/firebase/firebaseConfig';
import './Login.css';


// This is login via Google
import { signInWithPopup, GoogleAuthProvider, sendEmailVerification , sendPasswordResetEmail} from "firebase/auth";
import { auth } from "../config/firebase/firebaseConfig";


const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [loading, setLoading] = useState(false); 
    const history = useHistory();
  
    async function login(event: React.MouseEvent<HTMLIonButtonElement>) {
      event.preventDefault();
      loginUser(email, password, (success) => {
        if (success) {
          history.push('/home');
        } else {
          setShowErrorToast(true); 
        }
      });
    }
  
    async function handleGoogleLogin() {
        setLoading(true);
        const provider = new GoogleAuthProvider();
      
        try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
      
      
          console.log('Logged in user:', user);
          history.push('/home');
        } catch (error) {
          console.error('Google login error:', error);
          setShowErrorToast(true);
        } finally {
          setLoading(false);
        }
      }
  return (
    <IonPage>
      <IonContent className="ion-padding-top" scrollY={false} color={'login-page'}>
        <IonText className="ion-text-center">
          <p>Hey there,</p>
          <h1 className="title">Welcome Back</h1>
        </IonText>

        <IonCardContent>
          <form className="login-form">
            <IonInput
              type="email"
              name="email"
              className="input-fields"
              placeholder="Email"
              onIonChange={(e: any) => setEmail(e.target.value)}
            >
              <div slot="label">
                <IonIcon icon={mailOutline} className="icons"></IonIcon>
              </div>
            </IonInput>
            <IonInput
              type="password"
              name="password"
              className="input-fields"
              placeholder="Password"
              onIonChange={(e: any) => setPassword(e.target.value)}
            >
              <div slot="label">
                <IonIcon icon={lockClosedOutline} className="icons"></IonIcon>
              </div>
            </IonInput>
          </form>
            <div className="forgot" style={{ cursor: 'pointer' }}>
                <a href="/forgetpassword">Forget Your Password</a>
            </div>

          <IonButton className="button" shape="round" expand="block" onClick={login}>
            Login
            <IonIcon icon={logInSharp} slot="start" />
          </IonButton>

          <div className="line-with-text">
            <IonRow>
              <IonCol size="5.5">
                <hr />
              </IonCol>
              <IonCol size="1" className="center-text">
                <IonLabel className="or">or</IonLabel>
              </IonCol>
              <IonCol size="5.5">
                <hr />
              </IonCol>
            </IonRow>
          </div>

          <div className="logo-container">
            <img src="/Assets/icons/google-icon.png" alt="google-icon" width="45px" onClick={handleGoogleLogin}/>
            {/* <img className="facebook" src="facebook-icon.png" alt="facebook-icon" width="30px" onClick={hadnelTwiterLogin}/> */}
          </div>

          <div className="register">
            <p>
              Don't have an account yet?<a>Register</a>
            </p>
          </div>
        
        
        </IonCardContent>
      </IonContent>
    </IonPage>
  );
};

export default Login;
