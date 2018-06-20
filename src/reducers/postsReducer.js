import {
  FETCHING_POSTS,
  SET_POSTS,
  FETCHING_MORE_POSTS,
  SET_MORE_POSTS,
  DONE_FETCHING_POSTS,
  DONE_REFRESHING_POSTS,
  DONE_FETCHING_MORE_POSTS,
  REFRESHING_POSTS
} from "../actions/postsActions";

const initialState = {
  posts: [],
  fetchingPosts: false,
  fetchingMorePosts: false,
  refreshingPosts: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DONE_FETCHING_MORE_POSTS:
      return {
        ...state,
        fetchingMorePosts: false
      };
    case REFRESHING_POSTS:
      return {
        ...state,
        refreshingPosts: true
      };
    case DONE_REFRESHING_POSTS:
      return {
        ...state,
        refreshingPosts: false
      };
    case DONE_FETCHING_POSTS:
      return {
        ...state,
        fetchingPosts: false
      };
    case FETCHING_POSTS:
      return {
        ...state,
        fetchingPosts: true
      };
    case FETCHING_MORE_POSTS:
      return {
        ...state,
        fetchingMorePosts: true
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        fetchingPosts: false
      };
    case SET_MORE_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload]
      };
    default:
      return state;
  }
}
