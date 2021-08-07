import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux"; //1-import usedispatch
import { createPost, updatePost } from "../../actions/post";

//get the current id

const Form = ({ currentId, setCurrentId }) => {
  //fetching post for edit page
  const post = useSelector((state) =>
    currentId ? state.postsReducer.find((p) => p._id === currentId) : null
  );
  // console.log(`currentId= ${currentId}  ${post}`);

  //useState : is a Hook that allows you to have state variables in functional components
  // // Declare a new state variable,   //“array destructuring” Hook
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    recommendation: "",
    tags: "",
    selectedFile: "",
  });
  const cssClass = useStyles();
  const dispatch = useDispatch(); //2-create const variable

  //use useEffect to populate values of the form
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]); //the call back function runs when post value changes. [post]
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      //edit post
      dispatch(updatePost(currentId, postData)); //3-dispatch the Action
    } else {
      //new post
      dispatch(createPost(postData));
    }
    clear(); //clear fields
    //console.log(`Data is ${postData.recommendation}`);
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      recommendation: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={cssClass.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${cssClass.root} ${cssClass.form}`}
        onSubmit={handleSubmit}
      >
        <Typography varient="6">
          {currentId ? "Editing " : "Creating "}a Recommnedation
        </Typography>
        <TextField
          name="creator"
          varient="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={
            (e) => setPostData({ ...postData, creator: e.target.value }) //considering we have an obj in state
            //and want to update just one object's property
            // setPostData as a setter method for state
          }
        />

        <TextField
          name="title"
          varient="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="recommendation"
          varient="outlined"
          label="Recommendation"
          fullWidth
          value={postData.recommendation}
          onChange={(e) =>
            setPostData({ ...postData, recommendation: e.target.value })
          }
        />
        <TextField
          name="tags"
          varient="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />

        <div className={cssClass.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Button
          className={cssClass.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
export default Form;
