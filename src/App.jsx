import "./App.css";
import Score from "./component/score/Score";
import DivJetons from "./component/divJetons/divJetons";
import scissors from "./assets/images/icon-scissors.svg";
import paper from "./assets/images/icon-paper.svg";
import rock from "./assets/images/icon-rock.svg";
import lizard from "./assets/images/icon-lizard.svg";
import spock from "./assets/images/icon-spock.svg";
import { useEffect, useState } from "react";
import Modal from "./component/modal/Modal";

function App() {
  // change le choix de l'utilisateur
  const handleClick = (tempChoice) => {
    setUserChoice(tempChoice);
  };
  const handleRuleShow = () => {
    ruleShow ? setRuleShow(false) : setRuleShow(true);
  };
  // lance le jeu ou le reinitialise
  const launchGame = (tempUserChoice, modeJeu) => {
    if (game) {
      setGame(false);
    } else {
      // change en fonction du mode de jeu
      const tableau = modeJeu;

      // dans le tableau choisi au hasard un élément
      const tempComputerChoice = tableau[Math.floor(Math.random() * tableau.length)].choice;
      setComputerChoice(tempComputerChoice);

      // stock le résultat
      const tempResult = winOrLose(tempUserChoice, tempComputerChoice);
      setResult(tempResult);

      // selon le score actualise le score
      tempResult === "YOU WIN" && setScore(score + 1);
      tempResult === "YOU LOSE" && setScore(score - 1);

      setGame(true);
    }
  };
  // calcule le résultat du jeu
  const winOrLose = (user, computer) => {
    if (user === computer) return "DRAW";
    switch (user) {
      case "scissors":
        if (computer === "paper" || computer === "lizard") {
          return "YOU WIN";
        } else {
          return "YOU LOSE";
        }
      case "paper":
        if (computer === "rock" || computer === "spock") {
          return "YOU WIN";
        } else {
          return "YOU LOSE";
        }
      case "rock":
        if (computer === "scissors" || computer === "lizard") {
          return "YOU WIN";
        } else {
          return "YOU LOSE";
        }
      case "lizard":
        if (computer === "spock" || computer === "paper") {
          return "YOU WIN";
        } else {
          return "YOU LOSE";
        }
      case "spock":
        if (computer === "scissors" || computer === "rock") {
          return "YOU WIN";
        } else {
          return "YOU LOSE";
        }
    }
  };

  // info sur le jeu avec troix choix
  const jetonInfo3 = [
    { choice: "paper", img: paper, position: "0-3", color: "linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%))" },
    { choice: "scissors", img: scissors, position: "1-3", color: "linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))" },
    { choice: "rock", img: rock, position: "2-3", color: "linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))" },
  ];
  // info sur le jeu avec cinq choix
  const jetonInfo5 = [
    { choice: "scissors", img: scissors, position: "0-5", color: "linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))" },
    { choice: "paper", img: paper, position: "1-5", color: "linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%))" },
    { choice: "rock", img: rock, position: "2-5", color: "linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))" },
    { choice: "lizard", img: lizard, position: "3-5", color: "linear-gradient(to top, hsl(261, 73%, 60%), hsl(261, 72%, 63%))" },
    { choice: "spock", img: spock, position: "4-5", color: "linear-gradient(to top, hsl(189, 59%, 53%), hsl(189, 58%, 57%))" },
  ];

  const [userChoice, setUserChoice] = useState("paper");
  const [computerChoice, setComputerChoice] = useState("");
  const [ruleShow, setRuleShow] = useState(false);
  const [gameType, setGameType] = useState(false);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [game, setGame] = useState(false);

  // selon le gametype change le jeu en 3 ou 5 jeton
  const array = gameType ? jetonInfo3 : jetonInfo5;

  return (
    <>
      <Score score={score} choice={userChoice} />
      <DivJetons handleClick={handleClick} launchGame={launchGame} array={array} userChoice={userChoice} computerChoice={computerChoice} game={game} result={result} gameType={gameType} />
      {ruleShow && <Modal gameType={gameType} handleRuleShow={handleRuleShow} />}
      <button onClick={handleRuleShow} className="rules">RULES</button>
    </>
  );
}

export default App;
