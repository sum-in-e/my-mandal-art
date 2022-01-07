import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT＿APP­＿ID,
  storageBucket: process.env.REACT＿APP­＿STORAGE_BUCKET,
  messagingSenderId: process.env.REACT＿APP­＿MESSAGING_SENDER_ID,
  appId: process.env.REACT＿APP­＿APP_ID,
  measurementId: process.env.REACT＿APP­_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
