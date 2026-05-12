import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyArukXCuw7anz4-gw1b3mP4HBIQ90oTozo",
  authDomain: "habit-streak-5f730.firebaseapp.com",
  projectId: "habit-streak-5f730",
  storageBucket: "habit-streak-5f730.firebasestorage.app",
  databaseURL: "https://habit-streak-5f730-default-rtdb.firebaseio.com/",
  messagingSenderId: "169900795997",
  appId: "1:169900795997:web:9c8faff84ed1da224f05b4",
  measurementId: "G-MF8LZ4XYS7"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);