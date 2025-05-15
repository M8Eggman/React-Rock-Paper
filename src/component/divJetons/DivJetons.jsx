import "./DivJetons.css";
import Jeton from "../jeton/Jeton";
import scissors from "../../assets/images/icon-scissors.svg";
import paper from "../../assets/images/icon-paper.svg";
import rock from "../../assets/images/icon-rock.svg";
import lizard from "../../assets/images/icon-lizard.svg";
import spock from "../../assets/images/icon-spock.svg";
import { useState } from "react";

function DivJetons(props) {
 const winOrLose = (user, computer) => {
  if (user === computer) return "DRAW";
  switch (user) {
    case "scissors":
      if (computer === "paper" || computer === "lizard") return "YOU WIN";
      else return "YOU LOSE";
    case "paper":
      if (computer === "rock" || computer === "spock") return "YOU WIN";
      else return "YOU LOSE";
    case "rock":
      if (computer === "scissors" || computer === "lizard") return "YOU WIN";
      else return "YOU LOSE";
    case "lizard":
      if (computer === "spock" || computer === "paper") return "YOU WIN";
      else return "YOU LOSE";
    case "spock":
      if (computer === "scissors" || computer === "rock") return "YOU WIN";
      else return "YOU LOSE";
  }
};

  const jetonInfo3 = [
    { choice: "paper", img: paper, position: "0-3", color: "linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%))" },
    { choice: "scissors", img: scissors, position: "1-3", color: "linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))" },
    { choice: "rock", img: rock, position: "2-3", color: "linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))" },
  ];
  // TODO game with 5 choice
  //   const jetonInfo5 = [
  //     { choice:"scissors", img: scissors, position: "0-5", color: "linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))" },
  //     { choice:"paper", img: paper, position: "1-5", color: "linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%))" },
  //     { choice:"rock", img: rock, position: "2-5", color: "linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))" },
  //     { choice:"lizard", img: lizard, position: "3-5", color: "linear-gradient(to top, hsl(261, 73%, 60%), hsl(261, 72%, 63%))" },
  //     { choice:"spock", img: spock, position: "4-5", color: "linear-gradient(to top, hsl(189, 59%, 53%), hsl(189, 58%, 57%))" },
  //   ];

  return props.game ? (
    <div className="divGame">
      <div className="userChoice">
        <p>YOU PICKED</p>
        {jetonInfo3
          //j'enlève tout les élément qui ne sont pas le choix de
          .filter((filter) => filter.choice === props.userChoice)
          .map((element, index) => (
            <Jeton key={index} img={element.img} color={element.color} />
          ))}
      </div>
      <div className="winOrLose">
        <p>{winOrLose(props.userChoice, props.computerChoice)}</p>
        <button></button>
      </div>
      <div className="computerChoice">
        <p>THE HOUSE PICKED</p>
        {jetonInfo3
          //j'enlève tout les élément qui ne sont pas le choix de
          .filter((filter) => filter.choice === props.computerChoice)
          .map((element, index) => (
            <Jeton key={index} img={element.img} color={element.color} />
          ))}
      </div>
    </div>
  ) : (
    <div className="divJeton">
      {jetonInfo3.map((element) => (
        <Jeton handleClick={props.handleClick} launchGame={props.launchGame} key={element.choice} id={element.choice} img={element.img} color={element.color} position={element.position} />
      ))}
    </div>
  );
}

export default DivJetons;
