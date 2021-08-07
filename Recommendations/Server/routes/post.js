import express from "express";

//to prevent messy code you can seprate controllers in another file
import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/post.js";
const router = express.Router();
router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePost); //patch used for editing the exsited item
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);
export default router;
