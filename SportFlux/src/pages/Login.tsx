import { IonButton, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { lockClosed, lockClosedOutline, logInOutline, logInSharp, mailOutline, personAddOutline } from 'ionicons/icons';
import React, {useState} from 'react';
import './Login.css';
import {loginUser} from "../firebaseConfig";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false); 
    const history = useHistory();

  async function login() {
    loginUser(email, password, (success) => {
        if (success) {
          // Redirect to home page upon successful login
          history.push('/home');
        } else {
          // Handle login failure, e.g., show error message
          console.log('Login Failed');
        }
      });
  }
    const doLogin = (event:any) =>{
        event.preventDefault();
        console.log('doLogin')
    };
    return (
        <IonPage>
            <IonContent className="ion-padding-top" scrollY={false} color={'login-page'}>
                <IonText className='ion-text-center'>
                    <p>Hey there,</p>
                    <h1 className='title'>Welcome Back</h1>
                </IonText>

                <IonCardContent>
                                <form className='login-form'>
                                    <IonInput type='email' name='email' className='input-fields' placeholder='Email' onIonChange={(e: any) => setEmail(e.target.value)}>
                                        <div slot='label'>
                                            <IonIcon icon={mailOutline} className='icons'></IonIcon>
                                        </div>
                                    </IonInput>
                                    <IonInput type='password' name='password' className='input-fields' placeholder='Password' onIonChange={(e: any) => setPassword(e.target.value)}>
                                        <div slot='label'>
                                            <IonIcon icon={lockClosedOutline} className='icons'></IonIcon>
                                        </div>
                                    </IonInput>
                                </form>
                                <div className='forgot'>
                                    <p>Forgot your Password?</p>
                                </div>

                            <IonButton className='button' shape='round' expand='block' onClick={login}>Login
                                <IonIcon icon={logInSharp} slot='start' />
                            </IonButton>

                <div className="line-with-text">
                    <IonRow>
                        <IonCol size="5.5">
                            <hr />
                        </IonCol>
                        <IonCol size="1" className="center-text">
                        <IonLabel className='or'>or</IonLabel>
                        </IonCol>
                        <IonCol size="5.5">
                            <hr />
                        </IonCol>
                    </IonRow>
                </div>

                <div className='logo-container'>
                    <img src='google-icon.png' alt='google-icon' width='45px'/>
                    <img className='facebook' src='facebook-icon.png' alt='google-icon'width='30px'/>
                </div>

                <div className='register'>
                    <p>Don't have an account yet?<a>Register</a></p>
                </div>
                </IonCardContent>
            </IonContent>
        </IonPage>
    );
};

export default Login;