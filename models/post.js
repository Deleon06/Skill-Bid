import mongoose from "mongoose"
const Schema = mongoose.Schema;
const PostSchema = new Schema(
  {
    name: { type: String, require: true },
    budget: { type: Number, require: true },
    description: {type: String, require: true },
    completeBy: { type: String, require: true },
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true}
  },
  { timestamps: true }
);
export default mongoose.model("Post", PostSchema)
