import mongoose from "mongoose"
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    message: { type: String, required: true },
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true}
  },
  {timestamps: true}
)

export default mongoose.model("Post", PostSchema); 