import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { Auth } from "firebase/auth";
import { History } from "history";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByo9O54h7VHKlrPFGi8r24eT7PxyXopbg",
  authDomain: "sport-flux.firebaseapp.com",
  projectId: "sport-flux",
  storageBucket: "sport-flux.appspot.com",
  messagingSenderId: "313207685077",
  appId: "1:313207685077:web:f7568094c4227085a9475c",
  measurementId: "G-M7LVD6FB38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth(app); // Get the Auth instance

export async function loginUser(email: string, password: string, callback: (success: boolean) => void) {
  try {
    const res = await signInWithEmailAndPassword(auth as Auth, email, password);
    console.log("User logged in:", res.user);
    callback(true); 
  } catch (error) {
    console.error("Error logging in:", error);
    callback(false);
  }
}


export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log('User signed out successfully');
    return true;
  } catch (error) {
    console.error('Error signing out:', error);
    return false;
  }
};

export const sendUserPasswordResetEmail = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log('Password reset email sent successfully');
  } catch (error) {
    console.error('Error sending password reset email:', error);
    
  }
};


export const auth = getAuth(app); 
