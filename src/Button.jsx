

function Button(){
  // const handleClick = () => console.log("Ouch");
  const handleClick = (e) => e.target.textContent = "Hide";
  const handleClick2 = (e) => e.target.textContent = "Show";

  // const styles = {
  //   backgroundColor: "hsl(200, 100%, 50%)",
  //   color: "white",
  //   padding: "10px 20px",
  //   borderRadius: "5px",
  //   cursor: "pointer",
  //   border: "none",
  // }

  return(
    // <button style={styles} >Click me</button>
    <button className="button" onClick={(e)=>handleClick(e)} onDoubleClick={(e)=>handleClick2(e)} >Show</button>
  );
}
export default Button