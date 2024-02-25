import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByo9O54h7VHKlrPFGi8r24eT7PxyXopbg",
  authDomain: "sport-flux.firebaseapp.com",
  projectId: "sport-flux",
  storageBucket: "sport-flux.appspot.com",
  messagingSenderId: "313207685077",
  appId: "1:313207685077:web:f7568094c4227085a9475c",
  measurementId: "G-M7LVD6FB38"
};

//initialize firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();