import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBlN7z5DOLrk9k3XNgf0KhXdcWRcdeO9xo",
  authDomain: "tiktokfake-62c83.firebaseapp.com",
  projectId: "tiktokfake-62c83",
  storageBucket: "tiktokfake-62c83.appspot.com",
  messagingSenderId: "14738744756",
  appId: "1:14738744756:web:2ca5f57ea9f6a9a61b7ee1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;