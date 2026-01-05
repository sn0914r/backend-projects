const ADMIN = require("firebase-admin");

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
};

ADMIN.initializeApp({
  credential: ADMIN.credential.cert(serviceAccount),
});

const db = ADMIN.firestore();
const auth = ADMIN.auth();

module.exports = { ADMIN, db, auth };
