import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
});

const db = getFirestore();

export { db };
