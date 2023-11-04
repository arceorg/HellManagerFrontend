import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./SignUp.css";
import { Button } from "react-bootstrap";

export const SignUp = () => {
  return (
    <main>
      <Form className="SignUp-form">
        <Form.Group className="text-center">
          <Form.Label className="">
            <h1>Nueva Cuenta</h1>
          </Form.Label>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 mt-3"
          controlId="formPlaintextEmail"
        >
          <Form.Label column className="text-font-size">
            NOMBRE COMPLETO
          </Form.Label>
          <Col sm="12">
            <Form.Control type="text" placeholder="Ingrese su nombre" />
          </Col>
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

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column className="text-font-size">
            PASSWORD
          </Form.Label>
          <Col sm="12">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column className="text-font-size">
            FECHA NACIMIENTO
          </Form.Label>
          <Col sm="12">
            <Form.Control type="date" />
          </Col>
        </Form.Group>
        <Form.Group className="text-center">
          <Button type="submit" className="mt-2">
            Registro
          </Button>
        </Form.Group>
      </Form>
    </main>
  );
};
