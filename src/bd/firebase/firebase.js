import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZhb_81i9QUj3cYC8AINvQJvjV9WusMi8",
  authDomain: "coder-idea-villarrubia.firebaseapp.com",
  projectId: "coder-idea-villarrubia",
  storageBucket: "coder-idea-villarrubia.appspot.com",
  messagingSenderId: "493183844415",
  appId: "1:493183844415:web:c9cabfdd86d77b9c7b388a",
  measurementId: "G-D5M1KWC9QC",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
function getFirestore() {
  return firebase.firestore(app);
}
export default getFirestore;
