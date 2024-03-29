import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,

    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },

  //this acts like media query to apply this class only on sm devices
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse", //to keep on top box in mobile view
    },
  },
}));
