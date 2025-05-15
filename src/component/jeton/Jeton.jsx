import "./Jeton.css";

function Jeton(props) {
  return (
    <>
      <div
        onClick={() => {
          props.handleClick(props.id);
          props.launchGame(props.array);
        }}
        className={"jeton " + "jeton" + props.position}
        style={{ backgroundImage: `${props.color}` }}>
        <div className="jetonBody">
          <img src={props.img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Jeton;
