import { React, useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"; //import componnet for material-ui
import { useDispatch } from "react-redux"; //to hook redux
import recommendation from "./images/recommendation.png";
import { getPost } from "./actions/post";
import Post from "./component/Posts/Posts";
import Form from "./component/Form/Form";
import useStyles from "./styles";
const App = () => {
  const cssClass = useStyles();
  const [currentId, setCurrentId] = useState(null); //hook and set id=null
  //hook
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [currentId, dispatch]); //as soon as the currentId changes the app will dispatch the getPost function
  //it is used to refresh updated data in form immediatly

  return (
    <Container maxidth="lg">
      <AppBar className={cssClass.appBar} position="static" color="inherit">
        <Typography className={cssClass.Heading} variant="h2" align="center">
          {" "}
          Who do you recommend?{" "}
        </Typography>
        <img
          className={cssClass.image}
          src={recommendation}
          alt=""
          height="160"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={cssClass.mainContainer}
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Post setCurrentId={setCurrentId} />
            </Grid>{" "}
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>{" "}
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
