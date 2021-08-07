//Combine all reducers in this file
import { combineReducers } from "redux";
import postsReducer from "./posts";
/*export default combineReducers({
  postsReducer: postsReducer, 
});*/

//value and key are same you can keep only key as postReducer,
export default combineReducers({ postsReducer });
