// initial state

const initialState = {
  posts: [],
};
// actions

const fetchPostsRequest = () => {
    return {
        type: "FETCH_DISPATCHED";
    }
 
};

const fetchPostsSuccess = () => {
    return {
        type: "FETCH_SUCCESS"
    };
}
 

const fetchPostsFailed = () => {
    return {

        type: "FETCH_FAILED"
    }
};

// reducer

const postReducer = (state = initialState, action) => {}

// store

const store = createStore(postReducer);

// dispatch actions
