import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
const Posts = ({ setCurrentId }) => {
  //destructured post as paramaeter for edit the form
  const posts = useSelector((state) => state.postsReducer); //reducers/index.js return postReducer
  console.log(`Hi3 ${posts}`);
  const cssClass = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={cssClass.container}
      container
      alignments="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post.id} xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
