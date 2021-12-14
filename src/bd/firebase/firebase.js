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
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
function getFirestore() {
  return firebase.firestore(app);
}
export default getFirestore;
