import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCuMOgnBp38XquooRKegJE56GAUzaDYiuU",
  authDomain: "rubikspace-dcfe4.firebaseapp.com",
  databaseURL: "https://rubikspace-dcfe4.firebaseio.com",
  projectId: "rubikspace-dcfe4",
  storageBucket: "rubikspace-dcfe4.appspot.com",
  messagingSenderId: "462487139100"
};

export const firebaseApp = firebase.initializeApp(config);
