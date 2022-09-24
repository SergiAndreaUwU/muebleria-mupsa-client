
import styles from "../styles/Home.module.sass";


import "bootstrap/dist/css/bootstrap.min.css";
import MainTemplate from "../components/MainTemplate";

export default function Home() {
  return (
    <MainTemplate>
      <main className={styles.main}>
        home
        {/* <Image
          src={furnitureLogo}
          alt="logo picture"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <FurnitureCarousel /> */}
      </main>
    </MainTemplate>
  );
}
