import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  cloudinary_id: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Certificate", certificateSchema);
