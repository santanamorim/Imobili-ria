import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtzpIdlfZdSv0Opihju3IjGOs2z1yBY6c",
  authDomain: "loja-1ce3e.firebaseapp.com",
  databaseURL: "https://loja-1ce3e-default-rtdb.firebaseio.com",
  projectId: "loja-1ce3e",
  storageBucket: "loja-1ce3e.appspot.com",
  messagingSenderId: "807900449829",
  appId: "1:807900449829:web:46fe885bb9b35ea19443cc"
};

const app = initializeApp(firebaseConfig);

export default app;