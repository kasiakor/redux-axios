const { createStore, applyMiddleware } = require("redux");


// initial state

const initialState = {
  posts: [],
  error: "",
  loading: false,
};

// custom middleware

const customLogger = () => {
  return (next) => {
    return (action) => {
      console.log("custom logger", action);
    };
  };
  next(action);
};

// actions constants

const REQUEST_STARTED = "REQUEST_STARTED";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILED = "REQUEST_FAILED";

// actions

const fetchPostsRequest = () => {
  return {
    type: REQUEST_STARTED,
    payload: { name: "Xara" },
  };
};

const fetchPostsSuccess = () => {
  return {
    type: FETCH_SUCCESS,
  };
};

const fetchPostsFailed = () => {
  return {
    type: FETCH_FAILED,
  };
};

// reducer

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        posts: { name: "Lucy" },
      };
  }
};

// store

const store = createStore(postReducer, applyMiddleware(customLogger));

// subscribe

store.subscribe(() => {
  const data = store.getState();
  console.log("data", data.posts);
});
// dispatch actions

store.dispatch(fetchPostsRequest());
