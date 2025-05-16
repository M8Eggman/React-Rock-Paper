import "./Score.css";

function Score(props) {
  return (
    <>
      <header>
        <h1>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </h1>
        <div onClick={props.handleScoreShow} className="score">
          <p>SCORE</p>
          <p>{props.score}</p>
        </div>
      </header>
    </>
  );
}

export default Score;
