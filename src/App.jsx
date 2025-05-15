import "./App.css";
import Score from "./component/score/Score";
import DivJetons from "./component/divJetons/divJetons";
import { useState } from "react";

function App() {
  const handleClick = (tempChoice) => {
    setUserChoice(tempChoice);
  };
  const launchGame = (choice) => {
    setGame(true);
    const tableau = choixPossible3;
    setComputerChoice(tableau[Math.floor(Math.random() * tableau.length)]);
  };

  const choixPossible3 = ["paper", "scissors", "rock"];
  const choixPossible5 = ["paper", "scissors", "rock", "spock", "lizard"];

  const [userChoice, setUserChoice] = useState("paper");
  const [computerChoice, setComputerChoice] = useState("");
  const [game, setGame] = useState(false);
  return (
    <>
      <Score score={9} choice={userChoice} />
      <DivJetons handleClick={handleClick} launchGame={launchGame} userChoice={userChoice} computerChoice={computerChoice} game={game} />
    </>
  );
}

export default App;
