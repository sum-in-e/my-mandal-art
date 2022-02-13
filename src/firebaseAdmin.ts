import { credential } from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';

const firebaseAdminConfig = {
  credential: credential.cert({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    clientEmail: process.env.NEXT_PUBLIC_ADMIN_CLIENT_EMAIL,
    // replace `\` and `n` character pairs w/ single `\n` character
    privateKey: process.env.NEXT_PUBLIC_ADMIN_PRIVATE_KEY?.replace(
      /\\n/g,
      '\n',
    ),
  }),
  databaseURL: process.env.DATABASE_URL,
};

initializeApp(firebaseAdminConfig);
