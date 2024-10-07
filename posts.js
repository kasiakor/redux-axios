const { createStore, applyMiddleware } = require("redux");
const loggerMiddleware = require("redux-logger").createLogger();

// initial state

const initialState = {
  posts: [],
};
// actions

const fetchPostsRequest = () => {
  return {
    type: "FETCH_DISPATCHED",
  };
};

const fetchPostsSuccess = () => {
  return {
    type: "FETCH_SUCCESS",
  };
};

const fetchPostsFailed = () => {
  return {
    type: "FETCH_FAILED",
  };
};

// reducer

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DISPATCHED":
      return {
        posts: { name: "Lucy" },
      };
  }
};

// store

const store = createStore(postReducer, applyMiddleware(loggerMiddleware));

// subscribe

store.subscribe(() => {
  const data = store.getState();
  console.log("data", data.posts);
});
// dispatch actions

store.dispatch(fetchPostsRequest());
