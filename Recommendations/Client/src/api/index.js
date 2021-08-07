import axios from "axios"; //use to call API
const url = "http://localhost:5000/posts"; //define url which points to backend routes
export const fetchPost = () => axios.get(url); //fetch url
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
// axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
