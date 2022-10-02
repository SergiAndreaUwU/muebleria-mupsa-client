import React from "react";
import MainTemplate from "../components/MainTemplate";

import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import MuebleImg1 from "/public/basesHerreria/Mueble1.jpeg";
import MuebleImg2 from "/public/basesHerreria/Mueble2.jpeg";
import MuebleImg3 from "/public/basesHerreria/Mueble3.jpeg";
import MuebleImg4 from "/public/basesHerreria/Mueble4.jpeg";
import MuebleImg5 from "/public/basesHerreria/Mueble5.jpeg";
import MuebleImg6 from "/public/basesHerreria/Mueble6.jpeg";
import MuebleImg7 from "/public/basesHerreria/Mueble7.jpeg";
import MuebleImg8 from "/public/basesHerreria/Mueble8.jpeg";
import MuebleImg9 from "/public/basesHerreria/Mueble9.jpeg";

import MuebleImg10 from "/public/basesHerreria/Mueble10.jpeg";
import MuebleImg11 from "/public/basesHerreria/Mueble11.jpeg";
import MuebleImg12 from "/public/basesHerreria/Mueble12.jpeg";
import MuebleImg13 from "/public/basesHerreria/Mueble13.jpeg";
import MuebleImg14 from "/public/basesHerreria/Mueble14.jpeg";
import MuebleImg15 from "/public/basesHerreria/Mueble15.jpeg";
import MuebleImg16 from "/public/basesHerreria/Mueble16.jpeg";
import MuebleImg17 from "/public/basesHerreria/Mueble17.jpeg";
import MuebleImg18 from "/public/basesHerreria/Mueble18.jpeg";
import MuebleImg19 from "/public/basesHerreria/Mueble19.jpeg";

function BasesHerreria() {
  const imagesArray = [
    MuebleImg1,
    MuebleImg2,
    MuebleImg3,
    MuebleImg4,
    MuebleImg5,
    MuebleImg6,
    MuebleImg7,
    MuebleImg8,
    MuebleImg9,

    MuebleImg10,
    MuebleImg11,
    MuebleImg12,
    MuebleImg13,
    MuebleImg14,
    MuebleImg15,
    MuebleImg16,
    MuebleImg17,
    MuebleImg18,
    MuebleImg19,
  ];
  return (
    <MainTemplate>
      <div style={{marginTop:"20px"}}>
        <h1 style={{ textAlign: "center" }}>BASES DE HERRERIA</h1>
        <h3 style={{ textAlign: "center" }}>para comedor y mesas de centro</h3>
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

export default BasesHerreria;
