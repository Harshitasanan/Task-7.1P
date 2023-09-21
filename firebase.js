import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
    apiKey: "AIzaSyD-FRLB****",
  authDomain: "signup****",
  projectId: "si*****",
  storageBucket: "si*****",
  messagingSenderId: "21****",
  appId: "1****",
  measurementId: "G-****"
});

export const auth = getAuth(app);
export default app;
