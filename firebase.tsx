// Import the necessary Firebase SDKs and AsyncStorage
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"; // Use initializeAuth directly
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAmNWHqzp225jYq7i3me0hZwaxk1APPiwo",
  authDomain: "fashion-ecommerce-a3e65.firebaseapp.com",
  projectId: "fashion-ecommerce-a3e65",
  storageBucket: "fashion-ecommerce-a3e65.appspot.com",
  messagingSenderId: "653234042752",
  appId: "1:653234042752:web:9e53efa3824d304f3c7365",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth using AsyncStorage for persistence
const auth = initializeAuth(app);

// Export Firestore and Auth instances
export { db, auth, app };
