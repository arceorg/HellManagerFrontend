import React from "react";
import "./AdminEditarDocente.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AdminEditarDocente = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="botones-izq">
              <button className="btn btn-primary b izq-docente">Docente</button>
              <button className="btn btn-primary b izq-estudiante">
                Docente
              </button>
            </div>
          </div>
          <div className="col -md-10 contenedor">
            <div className="perfil">
              <i className="fa-solid fa-user"></i>
              <div className="nombre">Nombre de la persona</div>
            </div>
            <div className="informacion">
              <div className="info info-personal">Información personal</div>
              <div className="info especialidad">Especidad</div>
              <div className="info instituto">Donde se graduo?</div>
              <div className="info materias">Materias Asignadas</div>
              <div className="info salario">Salario</div>
              <div className="info contratacion">Tipo de Contratacion</div>
              <button className="boton-editar">Editar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
