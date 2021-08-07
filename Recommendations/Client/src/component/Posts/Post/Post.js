import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles.js";
import moment from "moment";
import { useDispatch } from "react-redux"; //to dispatch delete from actions-reducers
import { deletePost, likePost } from "../../../actions/post";
//destructre the props in post
const Post = ({ post, setCurrentId }) => {
  // console.log(`hhhhhh ${post.selectedFile}`);
  const cssClass = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={cssClass.card}>
      <CardMedia
        className={cssClass.media}
        image={post.selectedFile}
        title={post.title}
      />

      <div className={cssClass.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={cssClass.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default"></MoreHorizIcon>
        </Button>
      </div>
      <div className={cssClass.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={cssClass.title} variant="h6" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.recommendation}
        </Typography>
      </CardContent>
      <CardActions className={cssClass.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" />
          like &nbsp;
          {post.likeCount}
        </Button>

        <DeleteIcon
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          Delete
        </DeleteIcon>
      </CardActions>
    </Card>
  );
};

export default Post;
