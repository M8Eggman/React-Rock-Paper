import "./DivJetons.css";
import Jeton from "../jeton/Jeton";
import bgTriangle from "../../assets/images/bg-triangle.svg";
import bgPentagone from "../../assets/images/bg-pentagon.svg";

function DivJetons(props) {
  // selon si le jeu est lancer va afficher les choix ou le resultat
  return props.game ? (
    <div className="divGame" style={{ backgroundImage: props.gameType ? `url(${bgTriangle})` : `url(${bgPentagone})` }}>
      <div className="userChoice">
        <p>YOU PICKED</p>
        {/* affiche que le jeton qui est le choix de l'user */}
        {props.array
          .filter((filter) => filter.choice === props.userChoice)
          .map((element, index) => (
            <Jeton key={index} img={element.img} color={element.color} />
          ))}
      </div>
      <div className="winOrLose">
        <p>{props.result}</p>
        <button onClick={props.launchGame}>PLAY AGAIN</button>
      </div>
      <div className="computerChoice">
        <p>THE HOUSE PICKED</p>
        {/* affiche que le jeton qui est le choix du computer */}
        {props.array
          .filter((filter) => filter.choice === props.computerChoice)
          .map((element, index) => (
            <Jeton key={index} img={element.img} color={element.color} />
          ))}
      </div>
    </div>
  ) : (
    <div className="divJeton">
      {props.array.map((element) => (
        <Jeton handleClick={props.handleClick} launchGame={props.launchGame} array={props.array} key={element.choice} id={element.choice} img={element.img} color={element.color} position={element.position} />
      ))}
    </div>
  );
}

export default DivJetons;
