import "./Jeton.css";

function Jeton(props) {
  return (
    <>
      <div className={"jeton " + "jeton" + props.position} style={{ backgroundImage: `${props.color}` }}>
        <div className="jetonBody">
          <img src={props.img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Jeton;
