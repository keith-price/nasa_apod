import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
	// do I need to use the .env vars for this?
	apiKey: "AIzaSyDSSN_FrlOQUIzPhQ0zWNPba0RHHJKN1w0",

	authDomain: "apod-a71b7.firebaseapp.com",

	databaseURL:
		"https://apod-a71b7-default-rtdb.asia-southeast1.firebasedatabase.app",

	projectId: "apod-a71b7",

	storageBucket: "apod-a71b7.appspot.com",

	messagingSenderId: "42116092736",

	appId: "1:42116092736:web:ff9abb686f63443531a0a5",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, set, ref };
