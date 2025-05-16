import "./ModalScore.css";
import close from "../../assets/images/icon-close.svg";

function ModalScore(props) {
  return (
    <>
      <div onClick={props.handleScoreShow} className="modalScoreBackground">
        <div onClick={(e) => e.stopPropagation()} className="modalScore">
          <div className="modalScoreTitle">
            <p>Score</p>
            <button onClick={props.handleScoreShow}>
              <img src={close} alt="" />
            </button>
          </div>
          <div className="modalScoreResult">
            <div className="scoreResult3way">
              <h2>Mode 3 Way</h2>
              <p>Win {props.scoreData.way3.win}</p>
              <p>Lose {props.scoreData.way3.lose}</p>
              <p>Draw {props.scoreData.way3.draw}</p>
            </div>
            <div className="scoreResult5way">
              <h2>Mode 5 Way</h2>
              <p>Win {props.scoreData.way5.win}</p>
              <p>Lose {props.scoreData.way5.lose}</p>
              <p>Draw {props.scoreData.way5.draw}</p>
            </div>
          </div>
          <button onClick={!props.game ? props.resetScore : () => {}}>Reset Score</button>
        </div>
      </div>
    </>
  );
}

export default ModalScore;
