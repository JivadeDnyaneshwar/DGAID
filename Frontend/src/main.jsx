import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProjectProvider } from "./context/ProjectContext"; // ✅ import ProjectProvider

createRoot(document.getElementById("root")).render(
    <ProjectProvider>
      <App />
    </ProjectProvider>
);
