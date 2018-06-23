import {
  FETCHING_DB,
  SET_DB,
  MAKE_READY,
  MAKE_NOT_READY
} from "../actions/dbActions";

const initialState = {
  speakers: [],
  schedule: [],
  about: "",
  fetchingDb: false,
  isReady: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DB:
      return {
        ...state,
        fetchingDb: true
      };
    case SET_DB:
      state = {
        ...action.payload,
        ministers: action.payload.speakers,
        fetchingDb: false
      };
      return state;
    case MAKE_READY:
      return {
        ...state,
        isReady: true
      };
    case MAKE_NOT_READY:
      return {
        ...state,
        isReady: false
      };
    default:
      return state;
  }
}
