import React, { useState } from "react";
import { createProject } from "../../../api/projectApi";

const DesignForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !thumbnail || images.length === 0) {
      return alert("Please fill all fields");
    }

    const formData = new FormData();
    formData.append("title", title);
    if (thumbnail) formData.append("thumbnail", thumbnail);
    images.forEach((image) => formData.append("images", image));

    setLoading(true);
    await createProject(formData);
    onAdd();
    setTitle("");
    setThumbnail(null);
    setImages([]);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 flex flex-col gap-4 w-max">
      <h2 className="font-bold text-lg">Add Project</h2>
      <div className="flex gap-2 items-center justify-between">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Project title"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex gap-2 items-center justify-between">
        <label>Thumbnail</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setThumbnail(e.target.files[0])}
          required
          className="file-input file-input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex gap-2 items-center justify-between">
        <label>Images</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setImages([...e.target.files])}
          className="file-input file-input-bordered w-full max-w-xs"
        />
      </div>
      <button className="btn btn-primary w-max" type="submit">
        {loading ? <span className="loading loading-spinner loading-md"></span> : "Add Project"}
      </button>
    </form>
  );
};

export default DesignForm;
