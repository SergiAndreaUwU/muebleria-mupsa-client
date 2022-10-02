import React from "react";
import MainTemplate from "../components/MainTemplate";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import MuebleImg1 from "/public/escritorios/mueble1.jpeg";
import MuebleImg2 from "/public/escritorios/mueble2.jpeg";
import MuebleImg3 from "/public/escritorios/mueble3.jpeg";
import MuebleImg4 from "/public/escritorios/mueble4.jpeg";
import MuebleImg5 from "/public/escritorios/mueble5.jpeg";

function Escritorios() {
  const imagesArray = [
    MuebleImg1,
    MuebleImg2,
    MuebleImg3,
    MuebleImg4,
    MuebleImg5,
  ];
  return (
    <MainTemplate>
      <div style={{ marginTop: "20px" }}>
        <h1 style={{ textAlign: "center" }}>Escritorios</h1>
      </div>
      <Container>
        <Row style={{ marginTop: "20px" }}>
          {imagesArray.map((imag) => (
            <Col key={imag} lg={6}>
              <Image alt="img" width={1000} height={600} src={imag} />
            </Col>
          ))}
        </Row>
      </Container>
    </MainTemplate>
  );
}

export default Escritorios;
