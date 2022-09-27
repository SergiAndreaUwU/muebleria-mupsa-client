import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import FurnitureNavbar from "../components/FurnitureNavbar";
import Footer from "./Footer";

function MainTemplate({ children }) {
  return (
    <>
      <FurnitureNavbar />

          <Head>
            <title>Muebleria Mupsa</title>
            <meta name="description" content="Muebleria Mupsa" />
            <link rel="icon" href="/muebleria_mupsa_ico.ico" />
          </Head>
          <div style={{ backgroundColor: "white" }}> {children}</div>
          <Footer />
    </>
  );
}

export default MainTemplate;
