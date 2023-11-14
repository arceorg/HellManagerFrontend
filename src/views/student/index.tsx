import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { SideMenu } from "../../components/SideMenu/SideMenu";
import { studentMenuSideContent } from "../../utilities/MenuContents";
import "./student.css";
import { MyContext } from "../../context/Provider";

export const StudenView = () => {
  const { context } = useContext(MyContext);
  const jsxToRender = context?.view();

  return (
    <div className="main">
      <Row style={{ height: "80vh" }}>
        <Col xs={3} style={{ height: "100%" }}>
          <SideMenu menuContent={studentMenuSideContent} />
        </Col>
        <Col xs={9} style={{ height: "100%" }}>
          {jsxToRender}
        </Col>
      </Row>
    </div>
  );
};
