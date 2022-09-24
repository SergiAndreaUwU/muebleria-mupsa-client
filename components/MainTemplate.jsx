import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import FurnitureNavbar from "../components/FurnitureNavbar";
import Footer from "./Footer";

function MainTemplate({ children }) {
  return (
    <>
      <FurnitureNavbar />
      <Container>
        <Head>
          <title>Muebleria Mupsa</title>
          <meta name="description" content="Muebleria Mupsa" />
          <link rel="icon" href="/muebleria_mupsa_ico.ico" />
        </Head>

        {children}
        <Footer/>
        
      </Container>
    </>
  );
}

export default MainTemplate;
