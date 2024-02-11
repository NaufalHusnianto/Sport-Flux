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
import { sendUserPasswordResetEmail } from '../config/firebase/firebaseConfig';
import './Login.css';

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showErrorToast, setShowErrorToast] = useState(false);
  const history = useHistory();

  const handleResetPassword = async () => {
    try {
      await sendUserPasswordResetEmail(email);
      history.push('/home');
      console.log('Password reset email sent successfully');
    } catch (error) {
      console.error('Error sending password reset email:', error);
      setShowErrorToast(true);
    }
  };

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
              value={email}
              onIonChange={(e: any) => setEmail(e.detail.value)}
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
            onClick={handleResetPassword}
            
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
