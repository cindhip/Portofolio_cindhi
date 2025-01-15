import express from "express";
import cloudinary from "../config/cloudinaryConfig.js";
import upload from "../config/multerConfig.js";
import Certificate from "../models/certificate.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let certificate = await Certificate.find();
    if (!certificate) {
      res.status(404).json({ message: "No projects found" });
    }
    res.status(200).json(certificate);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let certificate = await Certificate.findById(req.params.id);
    if (!certificate) {
      res.status(404).json({ message: "Certificate not found" });
    }
    res.status(200).json(certificate);
  } catch (error) {
    console.log(error);
  }
})

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const imageResult = await cloudinary.uploader.upload(req.file.path);

    const certificate = new Certificate({
      title: req.body.title,
      image: imageResult.secure_url,
      cloudinary_id: imageResult.public_id,
    });

    await certificate.save();
    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({ message: "Failed to upload image" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let certificate = await Certificate.findByIdAndDelete(req.params.id);

    if (!certificate) {
      res.status(404).json({ message: "Certificate not found" });
    }

    await cloudinary.uploader.destroy(certificate.cloudinary_id);
    
    res.status(200).json({ message: "Certificate deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete certificate" });
  }
})

export default router;
