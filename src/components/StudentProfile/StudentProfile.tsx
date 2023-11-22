import React from "react";
import { studentInfoExample } from "../../utilities/StudentProfile";
import "./StudentProfile.css";

export const StudentProfile = () => {
  const user = studentInfoExample;

  return (
    <div className="user-profile-container">
      <div className="profile-header">
        <img src="mclovin.jpeg" alt="Profile" className="profile-image" />
        <h1 className="profile-name">{user.name + " " + user.lastName}</h1>
      </div>
      <div className="profile-info">
        <p>
          <strong>Identificación:</strong> {user.identification}
        </p>
        <p>
          <strong>Correo:</strong> {user.email}
        </p>
        <p>
          <strong>Edad:</strong> {user.age}
        </p>
        <p>
          <strong>Semestre:</strong> {user.semester}
        </p>
        <p>
          <strong>Carrera:</strong> {user.career}
        </p>
        <p>
          <strong>Ciudad:</strong> {user.city}
        </p>
        <p>
          <strong>Celular:</strong> {user.phone}
        </p>
        <p>
          <strong>sexo:</strong> {user.sexo}
        </p>
      </div>
    </div>
  );
};
