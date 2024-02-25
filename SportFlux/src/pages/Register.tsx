import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../config/firebase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { IonContent, IonPage, IonInput, IonButton, IonLabel, IonItem, IonText } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';

const Register: React.FC = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const displayName = (e.target as any)[0].value;
    const email = (e.target as any)[1].value;
    const password = (e.target as any)[2].value;
    const file = (e.target as any)[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(async () => {
        const downloadURL = await getDownloadURL(storageRef);
        await updateProfile(res.user, {
          displayName,
          photoURL: downloadURL,
        });
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName,
          email,
          photoURL: downloadURL,
        });
        await setDoc(doc(db, "userChats", res.user.uid), {});
        history.push("/");

        console.log("User data saved successfully.");
      });
    } catch (error: any) { // Specify the type of 'error'
      console.error("Error registering user:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className='formContainer'>
        <div className='formWrapper'>
          <span className="logo">Equinox Chat</span>
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
            <IonItem>
              <IonInput type="text"  placeholder='display name'/>
            </IonItem>
            <IonItem>
              <IonInput type="email" placeholder='email'/>
            </IonItem>
            <IonItem>
              <IonInput type="password" placeholder='password'/>
            </IonItem>
            <IonItem>
              <input type="file" id='file' />
            </IonItem>
            <IonButton type="submit" expand="block">Sign up</IonButton>
            {errorMessage && <IonText color="danger">{errorMessage}</IonText>}
          </form>
          <p>You already have an account? <Link to="/login">Login</Link></p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
