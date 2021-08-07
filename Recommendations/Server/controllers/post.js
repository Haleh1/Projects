import mongoose from "mongoose";
//create all handlers for post routs in this file
//get access to real model
import postObjMOdel from "../model/postDataModel.js";
export const getPosts = async (req, res) => {
  try {
    //console.log("innn");
    // const postObj = await postObjMOdel.find();
    const postObj = await postObjMOdel.find().exec();

    //console.log("Hi");
    res.status(200).json(postObj);
  } catch (error) {
    res.status(404).json({ messaage: error.message });
  }
};

export const createPosts = async (req, res) => {
  const { title, recommendation, selectedFile, creator, tags } = req.body; //Destructuring assignment:

  const newPost = new postObjMOdel({
    title,
    recommendation,
    selectedFile,
    creator,
    tags,
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  // const { title, message, creator, selectedFile, tags } = req.body;
  const { creator, title, recommendation, tags, selectedFile } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = await postObjMOdel.findByIdAndUpdate(
    id,
    { id, creator, title, recommendation, tags, selectedFile },
    { new: true }
  );
  console.log(creator);
  // res.json(post);

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  //console.log("del");
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await postObjMOdel.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  console.log("Like Me");
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const post = await postObjMOdel.findById(id);
  const updatedPost = await postObjMOdel.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  res.json(updatedPost);
};
