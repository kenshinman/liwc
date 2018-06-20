import axios from "axios";

export const FETCHING_POSTS = "FETCHING_POSTS";
export const DONE_FETCHING_POSTS = "DONE_FETCHING_POSTS";
export const SET_POSTS = "SET_POSTS";

export const REFRESHING_POSTS = "REFRESHING_POSTS";
export const DONE_REFRESHING_POSTS = "DONE_REFRESHING_POSTS";

export const FETCHING_MORE_POSTS = "FETCHING_MORE_POSTS";
export const DONE_FETCHING_MORE_POSTS = "DONE_FETCHING_MORE_POSTS";
export const SET_MORE_POSTS = "SET_MORE_POSTS";

export const fetchPosts = (page = 1, per_page = 20) => dispatch => {
  // dispatch({ type: FETCHING_POSTS });
  dispatch({ type: FETCHING_MORE_POSTS });
  axios
    .get(`/posts?page=${page}&per_page=${per_page}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: SET_POSTS, payload: res.data });
      dispatch({ type: DONE_FETCHING_POSTS });
      dispatch({ type: DONE_FETCHING_MORE_POSTS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SET_POSTS, payload: [] });
    });
};

export const doFetchingPosts = () => dispatch => {
  dispatch({ type: FETCHING_POSTS });
};

export const fetchMorePosts = (page, per_page) => dispatch => {
  dispatch({ type: FETCHING_MORE_POSTS });
  axios
    .get(`/posts?page=${page}&per_page=${per_page}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: SET_MORE_POSTS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SET_MORE_POSTS, payload: [] });
    });
};
