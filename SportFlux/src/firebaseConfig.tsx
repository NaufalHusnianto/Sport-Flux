import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "firebase/auth";
import { History } from "history";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAwQQle5rJzurucUAi3b5Y8Em9C7htNrM",
  authDomain: "sportfluxid.firebaseapp.com",
  projectId: "sportfluxid",
  storageBucket: "sportfluxid.appspot.com",
  messagingSenderId: "249134129873",
  appId: "1:249134129873:web:e69c4883f71399aad85bf0",
  measurementId: "G-DW3TCZTGZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Get the Auth instance

export async function loginUser(email: string, password: string, callback: (success: boolean) => void) {
  try {
    const res = await signInWithEmailAndPassword(auth as Auth, email, password);
    console.log("User logged in:", res.user);
    callback(true); // Call the callback with success status
  } catch (error) {
    console.error("Error logging in:", error);
    callback(false); // Call the callback with failure status
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