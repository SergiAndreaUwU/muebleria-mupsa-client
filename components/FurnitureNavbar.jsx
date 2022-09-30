import styles from "./FurnitureNavbar.module.sass";
import { GiHamburgerMenu } from "react-icons/gi";

function FurnitureNavbar() {
  return (
    <div className={styles.navbar}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ margin: "auto" }}>
          <h2 style={{ color: "white", userSelect: "none" }}>
            Muebleria MUPSA
          </h2>
        </div>
      </div>
      {/* dropdown */}
      <div className={styles.hamburgerButtonMenu}>
        <GiHamburgerMenu size={35} color={"white"} />
      </div>

      {/* end of dropdown */}
    </div>
  );
}

export default FurnitureNavbar;
