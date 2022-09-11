import { initiazileApp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAf9sTWe5zdpn8LPyfphCrauqqgYiGt5Mg",
    authDomain: "foodly-84219.firebaseapp.com",
    projectId: "foodly-84219",
    storageBucket: "foodly-84219.appspot.com",
    messagingSenderId: "555670999166",
    appId: "1:555670999166:web:8786d898ddc5b6ce22c82f"
  };

initiazileApp(firebaseConfig);


const auth = getAuth();
