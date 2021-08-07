import {
  CREATE,
  DELETE,
  FETCH_ALL,
  UPDATE,
  LIKE,
} from "../constants/actionTypes";
//Reducer: is a function that accept state and action
const postsReducer = (state = [], action) => {
  // console.log(`Hi hhh ${state}`);
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case UPDATE:
      return state.map(
        (state) => (state._id = action.payload._id ? action.payload : state)
      );

    case LIKE:
      return state.map(
        (state) => (state._id = action.payload._id ? action.payload : state)
      );
    case DELETE:
      return state.filter((state) => state._id !== action.payload._id);

    case CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default postsReducer;
