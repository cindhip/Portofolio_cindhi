import mongoose from "mongoose";

const designSchema = new mongoose.Schema({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  cloudinary_id: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Design", designSchema);
