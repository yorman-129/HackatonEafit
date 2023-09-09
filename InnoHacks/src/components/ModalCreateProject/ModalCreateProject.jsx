import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import apiService from "../../services/api";

const ModalCreateProject = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    nameProject: "",
    description: "",
    status: "",
    creationDate: "",
  });
  const [projects, setProjects] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Validación de datos del formulario (puedes agregar aquí)
    if (!formData.nameProject || !formData.status) {
      // Si faltan campos obligatorios, muestra un mensaje de error o realiza la acción necesaria
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, completa los campos obligatorios.",
        customClass: {
          // Aquí puedes definir el estilo personalizado
          container: "my-custom-swal-container", // Clase CSS para el contenedor
          popup: "my-custom-swal-popup", // Clase CSS para el popup
          title: "my-custom-swal-title", // Clase CSS para el título
          htmlContainer: "my-custom-swal-html-container", // Clase CSS para el contenido HTML
        },
      });
      return; // Evita el envío del formulario si la validación falla
    }

    // Crear un objeto con los datos del formulario
    const newProject = { ...formData };

    // Agregar el objeto al array de proyectos
    setProjects([...projects, newProject]);

    // Cerrar el modal
    onClose();

    // Reiniciar los campos del formulario
    setFormData({
      nameProject: "",
      description: "",
      status: "",
      creationDate: "",
      id: 0,
    });

    console.log(projects[0]);

    // Enviar el formulario a la API
    apiService.createProject(projects[0], "addProject").then((data) => {
      console.log(data);
      // Navegar a la página de detalle del proyecto.
      navigate("/ProjectDetail", { state: data });
    });
  };

  return (
    <>
      <Button onClick={onOpen}>Crear Proyecto</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Creando un nuevo proyecto...</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Nombre del proyecto</FormLabel>
              <Input
                placeholder="Nombre del proyecto"
                name="nameProject"
                value={formData.nameProject}
                onChange={handleChange}
              />
              <FormLabel>Descripción del proyecto</FormLabel>
              <Input
                placeholder="Descripción del proyecto"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <FormLabel>Estado inicial</FormLabel>
              <Select
                placeholder="Selecciona el estado del proyecto"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>Activo</option>
                <option>Inactivo</option>
                <option>Pausado</option>
              </Select>
              <FormLabel>Fecha de creación</FormLabel>
              <Input
                type="date"
                name="creationDate"
                value={formData.creationDate}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Enviar
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCreateProject;
