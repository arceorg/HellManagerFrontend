import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./login.css";
import { Button } from "react-bootstrap";
import { MyContext } from "../../context/Provider";
import { httpRequest } from "../../utilities/HttpRquest";
import axios from "axios";

export const Login: React.FC<{ onLoginSuccess: () => void }> = ({
  onLoginSuccess,
}) => {
  const { context, setContext } = useContext(MyContext);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const body = JSON.stringify({
      "email":"test@mail",
      "password": "testing"
    })
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNTZhNTYxNy02ODYzLTQzZjAtOGQxMS01N2FjMTkyYmI0M2UiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTk4Mjc1ODR9.sM0RTickpVwsra-QDunuP1Dt0uh4gwa7aK4WEq7_oIU");
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      mode: 'no-cors' as RequestMode,
      body
    };

    fetch("http://localhost:3000/auth/login", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log(error));

    //onLoginSuccess();
  };

  return (
    <main>
      <Form className="login-form" onSubmit={handleLogin}>
        <Form.Group className="text-center">
          <Form.Label className="">
            <h1>Inicio de sesión</h1>
          </Form.Label>
          <Form.Text className="d-block mt-0 mb-5">
            olvidaste la contraseña? <a href="#">haz click aqui</a>
          </Form.Text>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 mt-3"
          controlId="email"
        >
          <Form.Label column className="text-font-size">
            EMAIL
          </Form.Label>
          <Col sm="12">
            <Form.Control type="email" placeholder="email@example.com" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="password">
          <Form.Label column className="text-font-size">
            PASSWORD
          </Form.Label>
          <Col sm="12">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Button type="submit" className="mt-2" >
          Ingresar
        </Button>
      </Form>
    </main>
  );
};
