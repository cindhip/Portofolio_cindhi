import express from 'express';
import mongoose from 'mongoose';
import projectRoutes from "./routes/projectRoutes.js";
import designRoutes from "./routes/designRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

app.use(cors());

dotenv.config();

// Connect mongoose
try {
  mongoose.connect(process.env.MONGODB_URI)
  console.log("Connected to MongoDB");
} catch (error) {
  handleError(error)  
}

app.use(express.urlencoded({ extended: true }));

app.use("/project", projectRoutes);
app.use("/design", designRoutes);
app.use("/certificate", certificateRoutes);

app.listen(3000, function() {
  console.log("Server is running on port 3000");
})