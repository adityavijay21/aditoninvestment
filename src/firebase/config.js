import { initializeApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyCJOWRzXodx3MU3Xgs3Ce5dMSb87P5Ht7Q",
    authDomain: "aditon-website.firebaseapp.com",
    projectId: "aditon-website",
    storageBucket: "aditon-website.firebasestorage.app",
    messagingSenderId: "276244345786",
    appId: "1:276244345786:web:09b1517e12c08e47452383",
    measurementId: "G-PSYNC9HFX5"
  };

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);



export { functions };

