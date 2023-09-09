import axios from "axios";

const baseURL = "https://localhost:8080/api/addProject";

const apiService = {
  createProject: async (projectData) => {
    try {
      // Realizar una solicitud POST para crear un proyecto
      const response = await axios.post(`${baseURL}`, projectData);
      return response.data;
    } catch (error) {
      console.error("Error al crear el proyecto:", error);
      throw error;
    }
  },
};

export default apiService;
