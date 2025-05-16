import "./Jeton.css";

function Jeton(props) {
  return (
    <>
      <div
        onClick={() => {
          props.handleClick(props.id);
          props.launchGame(props.id, props.array);
        }}
        className={`jeton jeton${props.position} jeton-size-${props.size}`}
        style={{ backgroundImage: `${props.color}` }}>
        <div className="jetonBody">{props.img && <img src={props.img} className="jetonImage" alt="" />}</div>
      </div>
    </>
  );
}

export default Jeton;
