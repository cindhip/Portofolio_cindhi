import express from "express";
import cloudinary from "../config/cloudinaryConfig.js";
import upload from "../config/multerConfig.js";
import Design from "../models/design.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let design = await Design.find();
    if (!design) {
      res.status(404).json({ message: "No projects found" });
    }
    res.status(200).json(design);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let design = await Design.findById(req.params.id);
    if (!design) {
      res.status(404).json({ message: "Design not found" });
    }
    res.status(200).json(design);
  } catch (error) {
    console.log(error);
  }
})

router.post("/", upload.single("thumbnail"), async (req, res) => {
  try {
    const thumbnailResult = await cloudinary.uploader.upload(req.file.path);

    const design = new Design({
      title: req.body.title,
      thumbnail: thumbnailResult.secure_url,
      cloudinary_id: thumbnailResult.public_id,
    });

    await design.save();
    res.status(200).json(design);
  } catch (error) {
    res.status(500).json({ message: "Failed to upload thumbnail" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let design = await Design.findByIdAndDelete(req.params.id);

    if (!design) {
      res.status(404).json({ message: "Design not found" });
    }

    await cloudinary.uploader.destroy(design.cloudinary_id);
    
    res.status(200).json({ message: "Design deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete design" });
  }
})

export default router;
