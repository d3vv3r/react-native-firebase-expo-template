import { initializeApp } from 'firebase/app';
import {initializeAuth, browserLocalPersistence, browserPopupRedirectResolver, browserSessionPersistence, indexedDBLocalPersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyB9KRwbvPtoD2AlgnT1FaYfaq9d2XRPeuI",
  authDomain: "unique-delivery-app.firebaseapp.com",
  databaseURL: "https://unique-delivery-app-default-rtdb.firebaseio.com",
  projectId: "unique-delivery-app",
  storageBucket: "unique-delivery-app.appspot.com",
  messagingSenderId: "1019416037182",
  appId: "1:1019416037182:web:43abf4cd56637d4b064e6f",
  measurementId: "G-D8HSWKF2TC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence],
  popupRedirectResolver: browserPopupRedirectResolver,
});