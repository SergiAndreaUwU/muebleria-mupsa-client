
function Sidebar({ show,close }) {

    
  return (
    <div
      style={{
        width: "1000px",
        height: "100vh",
        display: show ? "block" : "none",
        backgroundColor: "#F6F6F6",
        position:"fixed",
        left:"0px",
        zIndex:201
      }}

      onClick={close}
    ></div>
  );
}
export default Sidebar;
