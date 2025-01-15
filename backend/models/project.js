import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [
    {
      url: { type: String },
      cloudinary_id: { type: String },
    },
  ],
  cloudinary_id: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Project", projectSchema);
