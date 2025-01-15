import React, { useEffect, useState } from "react";
import { getCertificate, deleteCertificate } from "../../../api/projectApi";

const CertificateList = ({ onDelete }) => {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getCertificate();
      setDesigns(data);
    };
    fetchProjects();
  }, [onDelete]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await deleteCertificate(id);
      onDelete();
    }
  };

  return (
    <div>
      <h2 className="font-bold text-xl">Certificate</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <th></th>
            <th>Title</th>
            <th>Image</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {designs.map((project, index) => (
              <tr key={project._id}>
                <td>{index + 1}</td>
                <td>{project.title}</td>
                <td>
                  <img src={project.image} alt={project.title} className="h-52 object-cover"/>
                </td>
                <td>
                  <button onClick={() => handleDelete(project._id)} className="btn btn-warning">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CertificateList;
