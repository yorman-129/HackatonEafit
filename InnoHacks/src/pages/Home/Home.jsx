import "./Home.scss";
import ModelCreateProject from "../../components/ModalCreateProject/ModalCreateProject";
import { Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <div className="home">
        <ModelCreateProject />
        <Button>Gestionar Proyecto</Button>
      </div>
    </>
  );
};

export default Home;
