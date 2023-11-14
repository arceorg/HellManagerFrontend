import React from "react";
import "./AdminEditarEstudiante.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AdminEditarEstudiante = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="botones-izq">
              <button className="btn btn-primary b izq-docente">Docente</button>
              <button className="btn btn-primary b izq-estudiante">Estudiante</button>
            </div>
          </div>
          <div className="col -md-10 contenedor">
            <div className="perfil">
              <i className="fa-solid fa-user"></i>
              <div className="nombre">Nombre de la persona</div>
            </div>
            <div className="informacion">
              <div className="info info-personal">Información personal</div>
              <div className="info grado-escolaridad">Grado de escolaridad</div>
              <div className="info asignaturas">Asignaturas matriculadas</div>
              <div className="info horario">Horario de clase</div>
              <button className="boton-editar">Editar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
  