import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ChakraProvider>
);
