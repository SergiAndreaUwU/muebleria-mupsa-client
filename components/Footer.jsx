import styles from "./Footer.module.sass";
import ListGroup from "react-bootstrap/ListGroup";
import UbicationImage from "/public/ubication.jpg";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Mueble11 from "/public/catalogo/mueble11.jpeg";

import { useMediaQuery } from "react-responsive";

const ubication =
  "Calle torrecillas #5 Colonia la Grangena Municipio de Poncitlan";
const contactNumbers = "392-142-4867";
const whatsappNumber = "392-141-8600";
const contactEmail = "MupsaForniture@gmail.com";

function Footer() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className={styles.customContainer}>
      <Container>
        <footer id="footer" className={styles.footer}>
          <div
            style={{
              width: "100%",
              position: "relative",
            }}
          >
            <h4 style={{ textAlign: "center" }}>¡COMUNÍCATE CON NOSOTROS!</h4>
            <Row>
              <Col lg={{ span: 5, offset: 1 }} md={12}>
                ven a visitarnos a: <br />
                {ubication}
                <hr />
                llamanos al:
                <br />
                <span style={{ textDecoration: "underline" }}>
                  {contactNumbers}
                </span>
                <hr />ó mandanos un mensaje por WhatsApp:
                <br />
                <span style={{ textDecoration: "underline" }}>
                  {whatsappNumber}
                </span>
                <hr />ó enviarnos un correo a: <br />
                <span style={{ textDecoration: "underline" }}>
                  {contactEmail}
                </span>
                <hr />ó visitanos: <br />
              </Col>
              {!isTabletOrMobile && (
                <Col lg={6} md={12}>
                  <Image
                    alt="Muebles_Mupsa"
                    src={Mueble11}
                    width={300}
                    height={300}
                  />
                </Col>
              )}
            </Row>
            <Row>
              <Col lg={{ span: 5, offset: 2 }} md={12}>
                <Image
                  alt="ubicacion"
                  src={UbicationImage}
                  width={300}
                  height={300}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window
                      .open(
                        "https://www.google.com.mx/maps/dir//20.3480976,-102.7936381/@20.348672,-102.7935394,18z",
                        "_blank"
                      )
                      .focus();
                  }}
                />
              </Col>
            </Row>
          </div>
        </footer>
      </Container>
    </div>
  );
}

export default Footer;
