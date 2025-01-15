import React, { useEffect, useState } from "react";
import { getProjects, deleteProject } from "../../../api/projectApi";

const DesignList = ({ onDelete }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, [onDelete]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await deleteProject(id);
      onDelete(); // Refresh data after delete
    }
  };

  return (
    <div>
      <h2 className="font-bold text-xl">UI/UX Project</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <th>Title</th>
            <th>Thumbnail</th>
            <th>Images</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id}>
                <td>{project.title}</td>
                <td>
                  <img src={project.thumbnail} alt={project.title} width="150" />
                </td>
                <td className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                  {project.images.map((image, index) => (
                    <img key={index} src={image.url} alt={project.title} width="150" />
                  ))}
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

export default DesignList;
