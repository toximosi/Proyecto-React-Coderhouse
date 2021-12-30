import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqezRHctJkFeHbd7fvUcDev8EkIG05tgY",
  authDomain: "proyecto-codehouse-react.firebaseapp.com",
  projectId: "proyecto-codehouse-react",
  storageBucket: "proyecto-codehouse-react.appspot.com",
  messagingSenderId: "687563804269",
  appId: "1:687563804269:web:445831ac8a78b1929ef964",
  measurementId: "G-86QLK7G0MX",
  /* apiKey: "AIzaSyCZhb_81i9QUj3cYC8AINvQJvjV9WusMi8",
  authDomain: "coder-idea-villarrubia.firebaseapp.com",
  projectId: "coder-idea-villarrubia",
  storageBucket: "coder-idea-villarrubia.appspot.com",
  messagingSenderId: "493183844415",
  appId: "1:493183844415:web:c9cabfdd86d77b9c7b388a",
  measurementId: "G-D5M1KWC9QC", */
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
function getFirestore() {
  return firebase.firestore(app);
}
export default getFirestore;
