import React, { useState } from "react";
import { createCertificate } from "../../../api/projectApi";

const CertificateForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image) {
      return alert("Please fill all fields");
    }

    const formData = new FormData();
    formData.append("title", title);
    if (image) formData.append("image", image);

    setLoading(true);
    await createCertificate(formData);
    onAdd();
    setTitle("");
    setImage(null);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 flex flex-col gap-4 w-max">
      <h2 className="font-bold text-lg">Add Certificate</h2>
      <div className="flex gap-2 items-center justify-between">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Certificate title"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex gap-2 items-center justify-between">
        <label>Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
          className="file-input file-input-bordered w-full max-w-xs"
        />
      </div>
      <button className="btn btn-primary w-max" type="submit">
        {loading ? <span className="loading loading-spinner loading-md"></span> : "Add Certificate"}
      </button>
    </form>
  );
};

export default CertificateForm;
