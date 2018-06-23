import { FETCHING_DB, SET_DB } from "../actions/dbActions";

const initialState = {
  speakers: [],
  schedule: [],
  about: "",
  fetchingDb: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DB:
      return {
        ...state,
        fetchingDb: true
      };
    case SET_DB:
      state = { ...action.payload, fetchingDb: false };
      return state;
    default:
      return state;
  }
}
