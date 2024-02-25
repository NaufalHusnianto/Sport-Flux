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
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase/firebaseConfig';


const Login: React.FC = () => {
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    try{
      await signInWithEmailAndPassword(auth, email, password);
      history.push("/")
    } catch(err){
      console.log(err)
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
          <form className="login-form" onSubmit={handleSubmit}>
            <IonInput type="email" name="email" className="input-fields" placeholder="Email">
              <div slot="label">
                <IonIcon icon={mailOutline} className="icons"></IonIcon>
              </div>
            </IonInput>
            <IonInput type="password" name="password" className="input-fields" placeholder="Password">
              <div slot="label">
                <IonIcon icon={lockClosedOutline} className="icons"></IonIcon>
              </div>
            </IonInput>
            <IonButton className="button" shape="round" expand="block" type='submit'>
              Login
              <IonIcon icon={logInSharp} slot="start" />
            </IonButton>
          </form>

            <div className="forgot" style={{ cursor: 'pointer' }}>
                <a href="/forgetpassword">Forget Your Password</a>
            </div>

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
            <img src="/Assets/icons/google-icon.png" alt="google-icon" width="45px"/>
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
