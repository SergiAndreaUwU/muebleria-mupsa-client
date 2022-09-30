/* eslint-disable react/no-unescaped-entities */
import styles from "../styles/Home.module.sass";

import "bootstrap/dist/css/bootstrap.min.css";
import MainTemplate from "../components/MainTemplate";
import FurnitureCarousel from "../components/FurnitureCarousel";
import FurnitureCarousel2 from "../components/FurnitureCarousel2";
import Logo from "/public/muebleria_mupsa_logo.jpg";

import Image from "next/image";


import MuebleImg1 from "/public/catalogo/mueble1.jpeg";
import MuebleImg2 from "/public/catalogo/mueble2.jpeg";
import MuebleImg3 from "/public/catalogo/mueble3.jpeg";
import MuebleImg4 from "/public/catalogo/mueble4.jpeg";
import MuebleImg5 from "/public/catalogo/mueble5.jpeg";
import MuebleImg6 from "/public/catalogo/mueble6.jpeg";
import MuebleImg7 from "/public/catalogo/mueble7.jpeg";
import MuebleImg8 from "/public/catalogo/mueble8.jpeg";
import MuebleImg9 from "/public/catalogo/mueble9.jpeg";

import MuebleImg10 from "/public/catalogo/mueble10.jpeg";
import MuebleImg11 from "/public/catalogo/mueble11.jpeg";
import MuebleImg12 from "/public/catalogo/mueble12.jpeg";
import MuebleImg13 from "/public/catalogo/mueble13.jpeg";
import MuebleImg14 from "/public/catalogo/mueble14.jpeg";
import MuebleImg15 from "/public/catalogo/mueble15.jpeg";
import MuebleImg16 from "/public/catalogo/mueble16.jpeg";
import MuebleImg17 from "/public/catalogo/mueble17.jpeg";
import MuebleImg18 from "/public/catalogo/mueble18.jpeg";
import MuebleImg19 from "/public/catalogo/mueble19.jpeg";

import MuebleImg20 from "/public/catalogo/mueble20.jpeg";
import MuebleImg21 from "/public/catalogo/mueble21.jpeg";
import MuebleImg22 from "/public/catalogo/mueble22.jpeg";
import MuebleImg23 from "/public/catalogo/mueble23.jpeg";
import MuebleImg24 from "/public/catalogo/mueble24.jpeg";
import MuebleImg25 from "/public/catalogo/mueble25.jpeg";
import MuebleImg26 from "/public/catalogo/mueble26.jpeg";
import MuebleImg27 from "/public/catalogo/mueble27.jpeg";
import MuebleImg28 from "/public/catalogo/mueble28.jpeg";
import MuebleImg29 from "/public/catalogo/mueble29.jpeg";

import MuebleImg30 from "/public/catalogo/mueble30.jpeg";
import MuebleImg31 from "/public/catalogo/mueble31.jpeg";
import MuebleImg32 from "/public/catalogo/mueble32.jpeg";
import MuebleImg33 from "/public/catalogo/mueble33.jpeg";
import MuebleImg34 from "/public/catalogo/mueble34.jpeg";
import MuebleImg35 from "/public/catalogo/mueble35.jpeg";
import MuebleImg36 from "/public/catalogo/mueble36.jpeg";
import MuebleImg37 from "/public/catalogo/mueble37.jpeg";
import MuebleImg38 from "/public/catalogo/mueble38.jpeg";
import MuebleImg39 from "/public/catalogo/mueble39.jpeg";

import MuebleImg40 from "/public/catalogo/mueble40.jpeg";
import MuebleImg41 from "/public/catalogo/mueble41.jpeg";
import CatalogueCarousel from "../components/CatalogueCarousel";

export default function Home() {

  const carouselImages = [
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

    MuebleImg20,
    MuebleImg21,
    MuebleImg22,
    MuebleImg23,
    MuebleImg24,
    MuebleImg25,
    MuebleImg26,
    MuebleImg27,
    MuebleImg28,
    MuebleImg29,

    MuebleImg30,
    MuebleImg31,
    MuebleImg32,
    MuebleImg33,
    MuebleImg34,
    MuebleImg35,
    MuebleImg36,
    MuebleImg37,
    MuebleImg38,
    MuebleImg39,

    MuebleImg40,
    MuebleImg41,
  ];


  return (
    <MainTemplate>
      <div
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <div style={{ margin: "auto" }}>
          <Image alt="Mupsa_Logo" src={Logo} height={550}/>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "20vh",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ userSelect: "none" }}>
          {" "}
          Crea tu Mueble ideal para que sea <br />
          <span className="resaltar">Único</span> e{" "}
          <span className="resaltar">Irrepetible</span>
        </h1>
      </div>
      <FurnitureCarousel />
      {/* <CatalogueCarousel imagesArray={carouselImages}/> */}
      <FurnitureCarousel2 />
    </MainTemplate>
  );
}
