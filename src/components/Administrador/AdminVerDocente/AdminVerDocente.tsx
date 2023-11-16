import React from "react";
import "./AdminVerDocente.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const AdminVerDocente = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="botones-izq">
              <button className="btn btn-primary b izq-docente">Docente</button>
              <button className="btn btn-primary b izq-estudiante">
                Estudiante
              </button>
            </div>
          </div>
          <div className="col -md-10 contenedor">
            <div className="col -md-9 barra-busqueda">
              <input
                type="text"
                className="barraBusqueda"
                placeholder="Buscar Docente..."
              />
              <button className="botonBuscar">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <div className="col -md-9 listado-docentes">
              <div className="docente">
                <button className="btn b btn-primary nombre">
                  Gregorio Santos
                </button>
                <button className="btn b btn-danger">Eliminar Docente</button>
                <button className="btn b btn-info">Editar Docente</button>
              </div>
              <div className="docente">
                <button className="btn b btn-primary nombre">
                  Emilio Santos
                </button>
                <button className="btn b btn-danger">Eliminar Docente</button>
                <button className="btn b btn-info">Editar Docente</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
