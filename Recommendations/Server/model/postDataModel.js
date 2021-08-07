import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  title: String,
  recommendation: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  priority: {
    type: String,
    default: "Normal",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const postTask = mongoose.model("postTask", postSchema);
export default postTask;
