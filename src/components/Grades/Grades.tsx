import React from "react";
import "./Grade.css";
import { Col, Row } from "react-bootstrap";
import { getFinalGrade, gradesExample } from "../../utilities/grades";

export const Grades = () => {
  let activity = 0;
  const grades = gradesExample;

  return (
    <div>
      {grades.map((grade) => {
        return (
          <div key={grade.subjectId} className="grade-square m-2 mb-4">
            <Row className="subject-name m-0 pt-1">
              <h5>{grade.subjectName}</h5>
            </Row>
            <Row className="m-0 p-2">
              <Col xs={12} className="d-flex justify-content-end mb-1">
                <small>Nota definitiva: {getFinalGrade(grade.notes)}</small>
              </Col>
              <Col xs={12} className="grade-square">
                <Row className="subject-name p-1">
                  <Col>Actividad</Col>
                  <Col className="d-flex justify-content-end">Porcentaje</Col>
                  <Col className="d-flex justify-content-end">Nota</Col>
                </Row>
                {grade.notes.map((note) => {
                  activity += 1;
                  return (
                    <Row className="" key={activity}>
                      <Col><small>Actividad {activity}</small></Col>
                      <Col className="d-flex justify-content-end">
                        <small>{note.percentage}%</small>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <small>{note.value}</small>
                      </Col>
                    </Row>
                  );
                })}
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};
