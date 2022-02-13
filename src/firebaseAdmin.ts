import { credential } from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const firebaseAdminConfig = {
  credential: credential.cert({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    privateKey: process.env.NEXT_PUBLIC_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.NEXT_PUBLIC_ADMIN_CLIENT_EMAIL,
  }),
  databaseURL: process.env.DATABASE_URL,
};

export const firebaseAdminApp = initializeApp(firebaseAdminConfig);

// Initialize Firebase
export const adminAuth = getAuth();
