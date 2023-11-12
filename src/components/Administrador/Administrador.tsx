import React from "react";
import "./Administrador.css";

export const Administrador = () => {
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
          <div className="col-md-9 principal">
            {/* Contenido principal */}
            <div className="row">
              <div className="col-md-10">
                {/* Primera sección - Docentes */}
                <div className="stats-box">
                  {/* Aquí puedes agregar estadísticas para docentes */}
                </div>
                <div className="seccion-botones">
                  <button className="btn b btn-primary">Agregar Docente</button>
                  <button className="btn b btn-danger">Eliminar Docente</button>
                  <button className="btn b btn-info">Modificar Docente</button>
                </div>
              </div>
              <div className="col-md-10">
                {/* Segunda sección - Estudiantes */}
                <div className="stats-box">
                  {/* Aquí puedes agregar estadísticas para estudiantes */}
                </div>
                <div className="seccion-botones">
                  <button className="btn b btn-primary">Agregar Estudiante</button>
                  <button className="btn b btn-danger">Eliminar Estudiante</button>
                  <button className="btn b btn-info">Modificar Estudiante</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
  