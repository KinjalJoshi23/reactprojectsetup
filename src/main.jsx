import "./Main.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);