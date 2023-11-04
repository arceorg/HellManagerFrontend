import React from "react";
import { SideMenuContent } from "../../utilities/MenuContents";
import { Button, Col, Row } from "react-bootstrap";
import "./SideMenu.css";

interface SideMenuProps {
  menuContent: SideMenuContent;
}

export const SideMenu = (props: SideMenuProps) => {
  const { menuContent } = props;
  return (
    <body className="p-4">
      {Object.keys(menuContent).map((menuItem) => {
        return (
          <Row key={menuItem}>
            <hr />
            <Col>
              {menuItem}
              <Row className="p-3 d-block">
                {Object.keys(menuContent[menuItem]).map((section) => {
                  return (
                    <Col key={section} className="mb-3">
                      <Button className="menu-buttons btn-secondary">
                        {section}
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        );
      })}
    </body>
  );
};
