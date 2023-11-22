import React, { useContext } from "react";
import {
  ClasifiedSignatures,
  SignatureToSuscribe,
  getSortedSignatures,
  signaturesToSuscribeExample,
} from "../../utilities/Signatures";
import { Button, Col, Row } from "react-bootstrap";
import "./Signature.css";
import { MyContext } from "../../context/Provider";
import { Suscribe } from "./suscribe";

export const SignatureSuscribe = () => {
  const sortedSignatures: ClasifiedSignatures = getSortedSignatures(
    signaturesToSuscribeExample,
  );
  const { context, setContext } = useContext(MyContext);

  const setToSuscribeView = (signature: SignatureToSuscribe) => {
    setContext({ ...context, view: Suscribe, signature });
  };

  return (
    <body className="p-5">
      {Object.keys(sortedSignatures).map((firstLetter) => {
        return (
          <Row key={firstLetter}>
            <hr />
            <Col>
              <h5>{firstLetter}</h5>
              <Row className="p-3 d-block">
                {sortedSignatures[firstLetter].map((signature) => {
                  return (
                    <Col key={signature.name} className="mb-3">
                      <Button
                        onClick={() => {
                          setToSuscribeView(signature);
                        }}
                        className="signature-btn"
                      >
                        {signature.name}
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
