import { IonButton, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { lockClosed, lockClosedOutline, logInOutline, logInSharp, mailOutline, personAddOutline } from 'ionicons/icons';
import React from 'react';
import './Login.css';

const Login: React.FC = () => {
    const doLogin = (event:any) =>{
        event.preventDefault();
        console.log('doLogin')
    };
    return (
        <IonPage>
            <IonContent className="ion-padding-top" scrollY={false}>
                <IonText className='ion-text-center'>
                    <p>Hey there,</p>
                    <h1 className='title'>Welcome Back</h1>
                </IonText>

                <IonCardContent>

                                <form className='login-form'>
                                    <IonInput type='email' name='email' className='input-fields' placeholder='Email'>
                                        <div slot='label'>
                                            <IonIcon icon={mailOutline} className='icons'></IonIcon>
                                        </div>
                                    </IonInput>
                                    <IonInput type='password' name='password' className='input-fields' placeholder='Password'>
                                        <div slot='label'>
                                            <IonIcon icon={lockClosedOutline} className='icons'></IonIcon>
                                        </div>
                                    </IonInput>
                                </form>
                                <div className='forgot'>
                                    <p>Forgot your Password?</p>
                                </div>

                <IonButton className='button' shape='round' type='submit' expand='block'>
                        Login
                        <IonIcon icon={logInSharp} slot='start'/>
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