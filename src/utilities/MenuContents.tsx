import React from "react";
import { Login } from "../components/Login/login";
import { Schedule } from "../components/Scheduler/Schedule";
import { Grades } from "../components/Grades/Grades";
import { SignatureSuscribe } from "../components/SignatureSuscribe/Signatures";
import { TeacherProfile } from "../components/TeacherProfile/TeacherProfile";

export type SideMenuContent = Record<
  string,
  Record<string, React.ComponentType | null>
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
    Notas: Grades,
  },
  Matricula: {
    Materias: SignatureSuscribe,
    "Curso extendido": SignatureSuscribe,
  },
  Docentes: {
    "Perfil docente": TeacherProfile,
  },
};
