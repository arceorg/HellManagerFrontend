import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header/Header";
//import { Administrador } from "./components/Administrador/Administrador";
//import { CambioContrasena } from "./components/CambioContrasena/CambioContrasena";
//import { AdminVerDocente } from "./components/Administrador/AdminVerDocente/AdminVerDocente";
//import { AdminVerEstudiante } from "./components/Administrador/AdminVerEstudiante/AdminVerEstudiante";
//import { AdminEditarEstudiante } from "./components/Administrador/AdminVerEstudiante/AdminEditarEstudiante/AdminEditarEstudiante";
import { AdminEditarDocente } from "./components/Administrador/AdminVerDocente/AdminEditarDocente/AdminEditarDocente";
function App() {
  return (
    <body>
      <Header/>
      <AdminEditarDocente />
    </body>
  );
}

export default App;
