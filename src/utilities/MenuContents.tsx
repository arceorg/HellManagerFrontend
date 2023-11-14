import React from "react";
import { Login } from "../components/Login/login";
import { Schedule } from "../components/Scheduler/Schedule";

export type SideMenuContent = Record<
  string,
  Record<string, React.ComponentType>
>;

export const teacherMenuSideContent: SideMenuContent = {
  Academico: {
    Horario: Login,
    Notas: Login,
  },
  Ajustes: {
    "Perfil docente": Login,
  },
};

export const studentMenuSideContent: SideMenuContent = {
  Academico: {
    Horario: Schedule,
    Notas: Login,
  },
  Matricula: {
    Materias: Login,
    "Curso extendido": Login,
  },
  Docentes: {
    "Perfil docente": Login,
  },
};
