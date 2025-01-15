import express from "express";
import cloudinary from "../config/cloudinaryConfig.js";
import upload from "../config/multerConfig.js";
import Project from "../models/project.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let project = await Project.find();
    if (!project) {
      res.status(404).json({ message: "No projects found" });
    }
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);
    if (!project) {
      res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
  }
})

router.post("/", upload.fields([{ name: "thumbnail", maxCount: 1 }, { name: "images", maxCount: 10 }]), async (req, res) => {
  try {
    // Upload thumbnail
    const thumbnailResult = await cloudinary.uploader.upload(req.files["thumbnail"][0].path);

    // Upload additional images
    const imageResults = [];
    if (req.files["images"]) {
      for (const image of req.files["images"]) {
        const result = await cloudinary.uploader.upload(image.path);
        imageResults.push({
          url: result.secure_url,
          cloudinary_id: result.public_id,
        });
      }
    }

    // Simpan proyek ke database
    const project = new Project({
      title: req.body.title,
      thumbnail: thumbnailResult.secure_url,
      cloudinary_id: thumbnailResult.public_id,
      images: imageResults,
    });

    await project.save();
    res.status(200).json(project);
  } catch (error) {
    console.error("Error creating project:", error.message);
    res.status(500).json({ message: "Failed to create project" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      res.status(404).json({ message: "Project not found" });
    }

    await cloudinary.uploader.destroy(project.cloudinary_id);
    for (const image of project.images) {
      await cloudinary.uploader.destroy(image.cloudinary_id);
    }
    
    res.status(200).json({ message: "Project deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete project" });
  }
})

export default router;
