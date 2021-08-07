import * as api from "../api";
import {
  CREATE,
  DELETE,
  FETCH_ALL,
  UPDATE,
  LIKE,
} from "../constants/actionTypes";
//Action creators

//using redux thunk-we created a function which return anothr function to use async syntax
export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(); //use fetchpost from api
    dispatch({ type: FETCH_ALL, payload: data }); //with redux-tunk insted of return, you have dispatch
  } catch (error) {
    console.log(error.message);
  }
};
/*const action = {
    type: "FETCH_ALL",
    payLoad: [],
  };
  dispatch(action);
};*/

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    console.log(`id is ${id}`);
    const { data } = await api.updatePost(id, post);
    console.log(`data is ${data}`);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    console.log(data);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
