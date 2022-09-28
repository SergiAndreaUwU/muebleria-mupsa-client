/* eslint-disable react/no-unescaped-entities */
import styles from "../styles/Home.module.sass";

import "bootstrap/dist/css/bootstrap.min.css";
import MainTemplate from "../components/MainTemplate";
import FurnitureCarousel from "../components/FurnitureCarousel";

import Mueble11 from "/public/catalogo/mueble11.jpeg";
import Mueble9 from "/public/catalogo/mueble9.jpeg";
import MuebleProceso9 from "/public/enProceso/mueble9.jpeg";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Logo from "/public/muebleria_mupsa_logo.jpg";

export default function Home() {
  return (
    <MainTemplate>
      <Container>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "80vh",
            backgroundColor: "black",
          }}
        >
          <div style={{ margin: "auto" }}>
            <Image alt="Mupsa_Logo" src={Logo} />
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
          <h1 style={{userSelect:"none"}}>
            {" "}
            Crea tu Mueble ideal para que sea <br />
            <span className="resaltar">Único</span> e{" "}
            <span className="resaltar">Irrepetible</span>
          </h1>
        </div>
        <main className={styles.main}>
          <div className={styles.a1}>
            <Image alt="comedor" src={Mueble11} />
          </div>
          <div className={styles.a2}>
            <h2>
              {" "}
              Crea tu Mueble ideal para que sea <br />
              <span className="resaltar">Único</span> e{" "}
              <span className="resaltar">Irrepetible</span>
            </h2>
            <hr />
          </div>
          <div className={styles.b1}>
            <p>
              Fabricación de comedores para 4, 6 y 8 personas Sillas, sillones,
              Sofás, Salas de 3 piezas, Sala esquinero, Bancas, Mesas de centro,
              mesa esquinera, espejos y adornos para el hogar.
            </p>
          </div>
          <div className={styles.b2}>
            <Image alt="comedor" src={Mueble9} />
          </div>
          <div className={styles.c1}>
            <Image alt="comedor" src={MuebleProceso9} />
          </div>
          <div className={styles.c2}>
            <ul>
              Trabajamos Madera Sólida de:
              <li>Chapa de Parota</li>
              <li>Parota</li>
              <li>Pino</li>
              <li>Rosa morada</li>
              <li>Caoba</li>
              <li>Melamina</li>
              <li>MDF</li>
            </ul>
          </div>
        </main>
      </Container>
    </MainTemplate>
  );
}
