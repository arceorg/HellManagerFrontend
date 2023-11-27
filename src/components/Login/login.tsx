import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./login.css";
import { Button } from "react-bootstrap";
import { MyContext } from "../../context/Provider";
import useHttp from "../../CustomHooks/UseHttp";

export const Login : React.FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
  const { context, setContext } = useContext(MyContext);
  const handleLogin = (e:React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    //const { data, isLoading, error } = useHttp("auth/login")
    onLoginSuccess();
  };

  return (
    <main>
      <Form className="login-form">
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
        <Form.Group className="text-center">
          <Button type="submit" className="mt-2" onClick={handleLogin}>
            Ingresar
          </Button>
        </Form.Group>
      </Form>
    </main>
  );
};
