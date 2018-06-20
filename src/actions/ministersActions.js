import firebase from "firebase";
export const FETCHING_MINISTERS = "FETHING_MINISTERS";
export const DONE_FETCHING_MINISTERS = "DONE_FETCHING_MINISTERS";
export const SET_MINISTERS = "SET_MINISTERS";
export const SET_CURRENT_SPEAKER = "SET_CURRENT_SPEAKER";

var config = {
  apiKey: "AIzaSyDZdd1IV_7VQ0yivbe-SeTRNkItcLxtsfY",
  authDomain: "social-app-9bae0.firebaseapp.com",
  databaseURL: "https://social-app-9bae0.firebaseio.com",
  projectId: "social-app-9bae0",
  storageBucket: "social-app-9bae0.appspot.com",
  messagingSenderId: "622903118906"
};
firebase.initializeApp(config);

const db = firebase.database();

export const fetchMinisters = () => dispatch => {
  dispatch({ type: FETCHING_MINISTERS });
  // alert("fetching data");
  let fresh_ministers = [];
  db.ref("speakers").on("value", snap => {
    console.log(snap.val());
    dispatch({ type: SET_MINISTERS, payload: snap.val() });
    dispatch({ type: DONE_FETCHING_MINISTERS });
    setTimeout(() => {
      console.log(fresh_ministers);
    }, 2000);

    // AsyncStorage.setItem("ministers", JSON.stringify(fresh_ministers));
  });
};

export const setCurrentMinister = index => dispatch => {
  dispatch({ type: SET_CURRENT_SPEAKER, payload: index });
};
