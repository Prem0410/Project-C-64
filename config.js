import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBgucLONl27wAvaG6pEs2if6_sKkHZ0exE",
  authDomain: "project-c64.firebaseapp.com",
  databaseURL: "https://project-c64.firebaseio.com",
  projectId: "project-c64",
  storageBucket: "project-c64.appspot.com",
  messagingSenderId: "630850725254",
  appId: "1:630850725254:web:d271867d0950adf2dfb807",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();
