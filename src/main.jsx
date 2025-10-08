import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../src/components/App/App";
import Header from "./components/Header/Header";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
