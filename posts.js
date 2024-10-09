const { createStore, applyMiddleware } = require("redux");
const axios = require("axios");
const { thunk } = require("redux-thunk");

// initial state

const initialState = {
  posts: [],
  error: "",
  loading: false,
};

// custom middleware

// const customLogger = () => {
//   return (next) => {
//     return (action) => {
//       console.log("custom logger", action);
//     };
//   };
//   next(action);
// };

// actions constants

const REQUEST_STARTED = "REQUEST_STARTED";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILED = "FETCH_FAILED";

// actions

const fetchPostsRequest = () => {
  return {
    type: REQUEST_STARTED,
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_SUCCESS,
    payload: posts,
  };
};

const fetchPostsFailed = (error) => {
  return {
    type: FETCH_FAILED,
    payload: error,
  };
};

// action creator from thunk, returns function with dispatch a an argument

const fetchPosts = () => {
  return async (dispatch) => {
    try {
      // dispatch fetch
      dispatch(fetchPostsRequest());
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/test"
      );

      // data back
      // dispatch success
      dispatch(fetchPostsSuccess(data));
    } catch (error) {
      // dispatch error
      dispatch(fetchPostsFailed(error.message));
    }
  };
};

// reducer

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case FETCH_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
  }
};

// store

const store = createStore(postReducer, applyMiddleware(thunk));

// subscribe

store.subscribe(() => {
  const data = store.getState();
  console.log("data", data);
});
// dispatch actions

store.dispatch(fetchPosts());
