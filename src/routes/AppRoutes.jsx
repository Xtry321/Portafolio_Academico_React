import { Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import NotebookPage from "../pages/NotebookPage";
import ProjectsPage from "../pages/ProjectsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-mi" element={<AboutPage />} />
      <Route path="/proyectos" element={<ProjectsPage />} />
      <Route path="/cuaderno" element={<NotebookPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
