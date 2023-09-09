import axios from "axios";

const baseURL = "http://localhost:8080/api";

const apiService = {
  createProject: async (projectData, endpoint) => {
    try {
      // Realizar una solicitud POST para crear un proyecto
      const response = await axios.post(
        `${baseURL}/${endpoint}`,
        {
          ...projectData,
          id: Math.floor(Math.random() * 1000) + 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al crear el proyecto:", error);
      throw error;
    }
  },
};

export default apiService;
