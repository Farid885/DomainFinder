import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/styles/BottomSide.css";

import "bootstrap";
function BottomSide() {
  return (
    <div>
      <Container>
        <Row className="wrapper-r  d-flex flex-column d-sm-flex flex-sm-row justify-content-center align-items-center pt-3 ">
          <Col className="coller  " xs="1">
            Top Searchs:
          </Col>
          <Col className="item-t" xs="1">
            development
          </Col>
          <Col className="item-t pl-2" xs="1">
            agile
          </Col>
          <Col className="item-t" xs="1">
            design
          </Col>
          <Col className="item-t" xs="1">
            finance
          </Col>
          <Col className="item-t" xs="1">
            startup
          </Col>
          <Col className="item-t" xs="1">
            delivery
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BottomSide;
