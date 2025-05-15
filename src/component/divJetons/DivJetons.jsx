import "./DivJetons.css";
import Jeton from "../jeton/Jeton";

function DivJetons(props) {
  // selon si le jeu est lancer va afficher les choix ou le resultat
  return props.game ? (
    <div className="divGame">
      <div className="userChoice">
        <p>YOU PICKED</p>
        {/* affiche que le jeton qui est le choix de l'user */}
        {props.array
          .filter((filter) => filter.choice === props.userChoice)
          .map((element, index) => (
            <Jeton handleClick={() => {}} launchGame={() => {}} key={index} img={element.img} color={element.color} size={300} />
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
            <Jeton handleClick={() => {}} launchGame={() => {}} key={index} img={element.img} color={element.color} size={300} />
          ))}
      </div>
    </div>
  ) : (
    <div className={props.gameType ? "divJeton bgTriangle" : "divJeton bgPentagone"}>
      {props.array.map((element) => (
        <Jeton
          handleClick={props.handleClick}
          launchGame={props.launchGame}
          array={props.array}
          key={element.choice}
          id={element.choice}
          img={element.img}
          color={element.color}
          position={element.position}
          size={props.gameType ? 200 : 175}
        />
      ))}
    </div>
  );
}

export default DivJetons;
