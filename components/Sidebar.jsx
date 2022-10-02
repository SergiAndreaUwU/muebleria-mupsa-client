import {AiFillCloseCircle} from "react-icons/ai"
import styles from "./Sidebar.module.sass"
function Sidebar({ show,close }) {

    
  return (
    <div
      style={{
        // width: "500px",
        width: show?"500px":"0px",
        height: "100vh",
        // display: show ? "block" : "none",
        backgroundColor: "#F6F6F6",
        position:"fixed",
        left:"0px",
        zIndex:201,
      }}

      className={styles.sidebar}

      onClick={close}
    >
        <div style={{cursor:"pointer",width:show?"50px":"0px",transition:"1s ease"}}>
        <AiFillCloseCircle size={"auto"} />
        </div>
    </div>
  );
}
export default Sidebar;
