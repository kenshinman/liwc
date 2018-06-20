import {
  SET_MINISTERS,
  DONE_FETCHING_MINISTERS,
  FETCHING_MINISTERS,
  SET_CURRENT_SPEAKER
} from "../actions/ministersActions";

const initialState = {
  ministers: [],
  fetchingMinisters: false,
  currentMinister: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_SPEAKER:
      return {
        ...state,
        currentMinister: state.ministers[action.payload]
      };
    case SET_MINISTERS:
      return {
        ...state,
        ministers: action.payload
      };
    case FETCHING_MINISTERS:
      return {
        ...state,
        fetchingMinisters: true
      };
    case DONE_FETCHING_MINISTERS:
      return {
        ...state,
        fetchingMinisters: false
      };
    default:
      return state;
  }
}
