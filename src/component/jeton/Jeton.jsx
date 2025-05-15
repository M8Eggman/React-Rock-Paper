import "./Jeton.css";

function Jeton(props) {
  return (
    <>
      <div
        onClick={() => {
          props.handleClick(props.id);
          props.launchGame(props.id, props.array);
        }}
        className={"jeton " + "jeton" + props.position}
        style={{ backgroundImage: `${props.color}`, width: `${props.size}px`, height: `${props.size}px` }}>
        <div className="jetonBody" style={{ width: `${props.size - props.size / 4}px`, height: `${props.size - props.size / 4}px` }}>
          <img src={props.img} style={{ width: `${props.size - props.size / 1.5}px`, height: `${props.size - props.size / 1.5}px` }} alt="" />
        </div>
      </div>
    </>
  );
}

export default Jeton;
