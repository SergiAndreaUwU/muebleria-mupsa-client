import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.sass";
import furnitureLogo from "../public/muebleria_mupsa_logo.jpg";
import FurnitureNavbar from "../components/FurnitureNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import FurnitureCarousel from "../components/FurnitureCarousel";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Muebleria Mupsa</title>
        <meta name="description" content="Muebleria Mupsa" />
        <link rel="icon" href="/muebleria_mupsa_ico.ico" />
      </Head>

      <main className={styles.main}>
        <FurnitureNavbar />
        <Image
          src={furnitureLogo}
          alt="logo picture"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <FurnitureCarousel />
      </main>

      <footer className={styles.footer}>Datos de contacto:</footer>
    </Container>
  );
}
