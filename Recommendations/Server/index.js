//you should have  "type":"module", in package.jason
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRouts from "./routes/post.js";
import dotenv from "dotenv"; //1-install npm i dotenv to read env variable from seprated file as .env
const app = express();
dotenv.config(); //2-call it
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//const connectionURL =
// "mongodb+srv://user:P@ssword@cluster0.5rhvw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
//console.log(PORT);
mongoose
  .connect(process.env.connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) //chain promise
  .then(() =>
    app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
app.use("/posts", postRouts);
