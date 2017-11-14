import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAGU0JPEh87xOUW6q0oRTMGSzn6_v3jj3k",
  authDomain: "pokedex-7a383.firebaseapp.com",
  databaseURL: "https://pokedex-7a383.firebaseio.com",
  projectId: "pokedex-7a383",
  storageBucket: "pokedex-7a383.appspot.com",
  messagingSenderId: "544727084847"
};
export const fireDex = firebase.initializeApp(config);
