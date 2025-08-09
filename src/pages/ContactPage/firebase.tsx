// src/firebase.ts
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACxgyoD1OgVLMvZq2-lAA2Yq-EzAnvWE8",
  authDomain: "claim-core-website.firebaseapp.com",
  projectId: "claim-core-website",
  storageBucket: "claim-core-website.firebasestorage.app",
  messagingSenderId: "231786186763",
  appId: "1:231786186763:web:013b3d4dbb4a86763cdf0e",
  measurementId: "G-ZGF12VJF6D",
  databaseURL: "https://claim-core-website-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

export { app };
