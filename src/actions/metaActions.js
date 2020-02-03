import firebase from "firebase";

export const FETCH_META = "FETCH_META";
export const SET_META = "SET_META";
export const FETCHING_META = "FETCHING_META";

const db = firebase.database();

export const fetchMeta = () => dispatch => {
	dispatch({ type: FETCHING_META });
	db.ref("meta").on("value", snapshot => {
		console.log(snapshot.val());
	});
};
