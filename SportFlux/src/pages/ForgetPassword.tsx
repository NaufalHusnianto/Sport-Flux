import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonButton,
  IonCardContent,
  IonContent,
  IonIcon,
  IonInput,
  IonPage,
  IonText,
} from '@ionic/react';
import {
  mailOutline,
  logInSharp,
} from 'ionicons/icons';
import './Login.css';

const ForgetPassword: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding-top" scrollY={false} color={'login-page'}>
        <IonText className="ion-text-center">
          <h1 className="title">Reset Your Account</h1>
        </IonText>

        <IonCardContent>
          <div className="register">
            <p>
              Please enter your email address to reset your account password.
            </p>
          </div>
          <form className="login-form">
            <IonInput
              type="email"
              name="email"
              className="input-fields"
              placeholder="Email"
            >
              <div slot="start">
                <IonIcon icon={mailOutline} />
              </div>
            </IonInput>
          </form>

          <IonButton
            className="button"
            shape="round"
            expand="block"
          >
            
            Reset
            <IonIcon icon={logInSharp} slot="start" />
          </IonButton>
        </IonCardContent>
      </IonContent>
    </IonPage>
  );
};

export default ForgetPassword;
