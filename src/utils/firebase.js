import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
	// do I need to use the .env vars for this?
	apiKey: "AIzaSyDSSN_FrlOQUIzPhQ0zWNPba0RHHJKN1w0",

	authDomain: "apod-a71b7.firebaseapp.com",

	// databaseURL:
	// 	"https://apod-a71b7-default-rtdb.asia-southeast1.firebasedatabase.app",

	projectId: "apod-a71b7",

	// storageBucket: "apod-a71b7.appspot.com",

	// messagingSenderId: "42116092736",

	// appId: "1:42116092736:web:ff9abb686f63443531a0a5",
});
const db = getFirestore();

export { db };

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

// 	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

// 	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
// 	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

// 	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

// 	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

// 	appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// export { database, set, ref };
