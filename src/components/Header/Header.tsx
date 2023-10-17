import React from "react";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { Button, Col, InputGroup } from "react-bootstrap";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export const Header = () => {
  const navDropDownTitle = (
    <FontAwesomeIcon icon={faBars} className="menu-icon" />
  );
  return (
    <Navbar expand="lg" className="bg-body-tertiary primary">
      <Container fluid>
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
          <NavDropdown title={navDropDownTitle} className="custom-dropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <Form.Group as={Col}>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                className=""
                aria-label="Search"
              ></Form.Control>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Form>
        <Button className="user-button primary">
          <FontAwesomeIcon icon={faUser} className="user-icon" />
        </Button>
      </Container>
    </Navbar>
  );
};
