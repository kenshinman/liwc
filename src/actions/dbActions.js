import firebase from "firebase";

var config = {
  apiKey: "AIzaSyDZdd1IV_7VQ0yivbe-SeTRNkItcLxtsfY",
  authDomain: "social-app-9bae0.firebaseapp.com",
  databaseURL: "https://social-app-9bae0.firebaseio.com",
  projectId: "social-app-9bae0",
  storageBucket: "social-app-9bae0.appspot.com",
  messagingSenderId: "622903118906"
};
firebase.initializeApp(config);

export const FETCHING_DB = "FETCHING_DB";
export const SET_DB = "SET_DB";

const db = firebase.database();

export const fetchDB = () => dispatch => {
  dispatch({ type: FETCHING_DB });

  db.ref().on("value", snapshot => {
    // console.log(snapshot.val());
    dispatch({ type: SET_DB, payload: snapshot.val() });
  });
};
