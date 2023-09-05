import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Card } from 'reactstrap';
import { Container, Row, Col } from "reactstrap";
import Images from "../assets/images/Images";
import Arrows from '../Others/Arrows'

function HomeImage() {
  return (
    <div>
      <Container>
        <Row className="d-flex flex-column d-sm-flex flex-sm-row justify-content-center align-items-center  " style={{paddingTop:'120px'}}>
          <Col className="col-lg-6 col-md-12 col-sm-12 text-sm-left hiw-col-style">
            <div className="w-100 w-sm-75">
              <h1>Use Domain Finder to find unique domains!</h1>
              <p className="fs-8 w-100  mt-5">
                Millions of people are searching for companies, domains, meta tags, company names and etc., on Domain
                finder. Try today! 1 000 000 data for your search.
              </p>
            </div>
            
          </Col>
          <Col className="text-center ">
            <img className="humanimg" src={Images.Human} alt="" />
          </Col>
        </Row>
        <Arrows/>
      </Container>
    </div>
  );
}

export default HomeImage;
