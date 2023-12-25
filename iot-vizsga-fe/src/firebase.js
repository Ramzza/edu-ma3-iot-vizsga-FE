import firebase from "firebase/compat/app";
import "firebase/compat/database";

let config = {
  apiKey: "xxx",
  authDomain: "YOUR_FIREBASE_DOMAIN",
  databaseURL: "YOUR_DB_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "xxx",
  appId: "xxx",
};

firebase.initializeApp(config);
var db = firebase.database();

export default db;
