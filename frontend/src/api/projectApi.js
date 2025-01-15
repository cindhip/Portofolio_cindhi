import axios from "axios";

const BASE_URL = "http://localhost:3000";

// UI UX Project
export const getProjects = async () => {
  const response = await axios.get(BASE_URL + "/project");
  return response.data;
};

export const createProject = async (formData) => {
  const response = await axios.post(BASE_URL + "/project", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await axios.delete(`${BASE_URL}/project/${id}`);
  return response.data;
};

// Design
export const getDesign = async () => {
  const response = await axios.get(BASE_URL + "/design");
  return response.data;
}

export const createDesign = async (formData) => {
  const response = await axios.post(BASE_URL + "/design", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const deleteDesign = async (id) => {
  const response = await axios.delete(`${BASE_URL}/design/${id}`);
  return response.data;
}

// Certificate
export const getCertificates = async () => {
  const response = await axios.get(BASE_URL + "/certificate");
  return response.data;
}

export const createCertificate = async (formData) => {
  const response = await axios.post(BASE_URL + "/certificate", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const deleteCertificate = async (id) => {
  const response = await axios.delete(`${BASE_URL}/certificate/${id}`);
  return response.data;
}