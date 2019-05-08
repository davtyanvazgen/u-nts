import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBJiRNNAgmcIzNxeT9Maue06RlcCJ9mfmA",
  authDomain: "unicus-nts.firebaseapp.com",
  databaseURL: "https://unicus-nts.firebaseio.com",
  projectId: "unicus-nts",
  storageBucket: "unicus-nts.appspot.com",
  messagingSenderId: "670304000542",
  appId: "1:670304000542:web:22bdccbefac33eca"
};

export default function initFirebase() {
  // Initialize Firebase
  firebase.initializeApp(config);

  // Initialize Cloud Firestore through Firebase
  // firebase.firestore().settings({timestampsInSnapshots: true});
}
