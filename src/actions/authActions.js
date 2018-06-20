import firebase from "firebase";

export const FETCH_DATA = "FETCH_DATA";
export const SET_DATA = "SET_DATA";
export const FETCHING_DATA = "FETCHING_DATA";

const db = firebase.database();

export const fetchData = segment => dispatch => {
  dispatch({ type: FETCHING_DATA });
};
