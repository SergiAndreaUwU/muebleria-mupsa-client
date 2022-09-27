import styles from "./Footer.module.sass";
import ListGroup from "react-bootstrap/ListGroup";
import UbicationImage from "/public/ubication.jpg";
import Image from "next/image";
import { Container } from "react-bootstrap";

const ubication =
  "Calle torrecillas #5 Colonia la Grangena Municipio de Poncitlan";
const contactNumbers = "392-142-4867";
const whatsappNumber = "392-141-8600";
const contactEmail = "MupsaForniture@gmail.com";

function Footer() {
  return (
    <Container>
    <footer id="footer" className={styles.footer}>
      Datos de contacto:
      <ListGroup variant="flush">
        <ListGroup.Item>Nos ubicamos en {ubication}</ListGroup.Item>
        <ListGroup.Item>Llamanos al: {contactNumbers}</ListGroup.Item>
        <ListGroup.Item>
          o envianos un Whatsapp al: {whatsappNumber}
        </ListGroup.Item>
        <ListGroup.Item>o envianos un correo a: {contactEmail}</ListGroup.Item>
        <ListGroup.Item>
        <div style={{width: '100%', height: '68vh', position: 'relative'}}>
          
          <Image
            alt="ubicacion"
            src={UbicationImage}
            layout="fill"
            objectFit="contain"
          />
          </div>
        </ListGroup.Item>
        
      </ListGroup>
    </footer>
    </Container>
  );
}

export default Footer;
