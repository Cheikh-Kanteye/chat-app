import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQ3Na6MM1lJv-hByi_G9Mz0bRWw8_2TQw",
  authDomain: "chat-appv01.firebaseapp.com",
  projectId: "chat-appv01",
  storageBucket: "chat-appv01.appspot.com",
  messagingSenderId: "366686964215",
  appId: "1:366686964215:web:ae3a03ea04f9e0338d86f2",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
