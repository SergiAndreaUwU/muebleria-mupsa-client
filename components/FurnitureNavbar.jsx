import styles from "./FurnitureNavbar.module.sass";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { useState } from "react";

function FurnitureNavbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
    <Sidebar show={showSidebar} close={()=>{setShowSidebar(false)}}/>
    <div className={styles.navbar}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ margin: "auto" }}>
          <h2 style={{ color: "white", userSelect: "none" }}>
            Muebleria MUPSA
          </h2>
        </div>
      </div>
      {/* dropdown */}
      <div
        className={styles.hamburgerButtonMenu}
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
      >
        <GiHamburgerMenu size={35} color={"white"} />
      </div>

      {/* end of dropdown */}
    </div>
    </>
  );
}

export default FurnitureNavbar;
