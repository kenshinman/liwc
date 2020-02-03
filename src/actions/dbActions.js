import firebase from "firebase";
import config from "../../config";

firebase.initializeApp(config.firebaseConfig);

export const FETCHING_DB = "FETCHING_DB";
export const SET_DB = "SET_DB";

export const MAKE_READY = "MAKE_READY";
export const MAKE_NOT_READY = "MAKE_NOT_READY";

const db = firebase.database();

export const fetchDB = () => dispatch => {
	dispatch({ type: FETCHING_DB });
	dispatch({ type: MAKE_NOT_READY });

	db.ref().on("value", snapshot => {
		// console.log(snapshot.val());
		dispatch({ type: SET_DB, payload: snapshot.val() });
		dispatch({ type: MAKE_READY });
	});
};
