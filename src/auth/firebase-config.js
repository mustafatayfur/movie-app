import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTVqBrWEnBuNYRr2MdUHpiFlTzucifuX4",
  authDomain: "movie-app-1-8b54f.firebaseapp.com",
  projectId: "movie-app-1-8b54f",
  storageBucket: "movie-app-1-8b54f.appspot.com",
  messagingSenderId: "122639197973",
  appId: "1:122639197973:web:6b5b663dca8c510b0eab1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)