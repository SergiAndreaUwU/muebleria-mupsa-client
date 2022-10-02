import React from 'react'
import MainTemplate from "../components/MainTemplate"

import { Container,Row,Col } from 'react-bootstrap';
import Image from 'next/image';

import MuebleImg1 from "/public/espejos/mueble1.jpeg";
import MuebleImg2 from "/public/espejos/mueble2.jpeg";
import MuebleImg3 from "/public/espejos/mueble3.jpeg";
import MuebleImg4 from "/public/espejos/mueble4.jpeg";
import MuebleImg5 from "/public/espejos/mueble5.jpeg";
import MuebleImg6 from "/public/espejos/mueble6.jpeg";
import MuebleImg7 from "/public/espejos/mueble7.jpeg";
import MuebleImg8 from "/public/espejos/mueble8.jpeg";
import MuebleImg9 from "/public/espejos/mueble9.jpeg";

import MuebleImg10 from "/public/espejos/mueble10.jpeg";
import MuebleImg11 from "/public/espejos/mueble11.jpeg";
import MuebleImg12 from "/public/espejos/mueble12.jpeg";
import MuebleImg13 from "/public/espejos/mueble13.jpeg";
import MuebleImg14 from "/public/espejos/mueble14.jpeg";


function Espejos() {
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
  ];
  return (
    <MainTemplate>
      <div style={{marginTop:"20px"}}>
        <h1 style={{ textAlign: "center" }}>ESPEJOS</h1>
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

export default Espejos
