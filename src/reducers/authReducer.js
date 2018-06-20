import { SET_CURRENT_USER, LOGOUT_USER } from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
  user: {},
  fetchingUser: false,
  profile: {},
  fetchingProfile: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    default:
      return state;
  }
}
