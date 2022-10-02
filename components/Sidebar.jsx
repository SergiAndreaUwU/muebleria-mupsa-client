import { AiFillCloseCircle } from "react-icons/ai";
import styles from "./Sidebar.module.sass";
import { useMediaQuery } from "react-responsive";
function Sidebar({ show, close }) {
  const WIDTH_SIDEBAR = "500px";
  const WIDTH_SIDEBAR_MOBILE = "100vw";
  const WIDTH_CLOSE_BUTTON = "50px";
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div
      style={{
        width: (() => {
          if (show) {
            if (isTabletOrMobile) return WIDTH_SIDEBAR_MOBILE;
            else return WIDTH_SIDEBAR;
          } else {
            return "0px";
          }
        })(),
        visibility: show ? "visible" : "hidden",
      }}
      className={styles.sidebar}
    >
      <div style={{ display: "flex", padding: "20px" }}>
        <div
          style={{
            cursor: "pointer",
            visibility: show ? "visible" : "hidden",
            marginLeft: "auto",
          }}
          onClick={close}
        >
          <AiFillCloseCircle size={50} />
        </div>
      </div>
      <div
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
          display: show ? "block" : "none",
        }}
      >
        <div className={styles.resaltarListItem}>
          <a href="./basesHerreria">Bases de Herreria</a>
        </div>
        <hr />
        <div className={styles.resaltarListItem}>
          <a href="./comedores">Comedores</a>
        </div>
        <hr />
        <div className={styles.resaltarListItem}>
          <a href="./escritorios">Escritorios</a>
        </div>
        <hr />
        <div className={styles.resaltarListItem}>
          <a href="./espejos">Espejos</a>
        </div>
        <hr />
        <div className={styles.resaltarListItem}>
          <a href="./mesasCentro">Mesas de centro</a>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
