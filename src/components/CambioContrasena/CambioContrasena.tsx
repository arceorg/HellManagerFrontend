import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./CambioContrasena.css";
import { Button } from "react-bootstrap";

export const CambioContrasena = () => {
  return (
    <main>
      <Form className="login-form">
        <Form.Group className="text-center">
          <Form.Label className="">
            <h2>Cambio Constraseña</h2>
          </Form.Label>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 mt-3"
          controlId="formPlaintextEmail"
        >
          <Form.Label column className="text-font-size">
            EMAIL
          </Form.Label>
          <Col sm="12">
            <Form.Control type="email" placeholder="email@example.com" />
          </Col>
        </Form.Group>
        <Form.Group className="text-center">
          <Button type="submit" className="mt-2">
            Confirmación
          </Button>
        </Form.Group>
      </Form>
    </main>
  );
};
