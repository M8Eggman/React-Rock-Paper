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
import ModalScore from "./component/modalScore/ModalScore";

function App() {
  // change le choix de l'utilisateur
  const handleClick = (tempChoice) => {
    setUserChoice(tempChoice);
  };
  // change la variable qui s'occupe de montrer les règles
  const handleRuleShow = () => {
    ruleShow ? setRuleShow(false) : setRuleShow(true);
  };
  // change la variable qui s'occupe de lancer le jeu
  const handleGameType = () => {
    gameType ? setGameType(false) : setGameType(true);
  };
  // change la variable qui s'occupe d'afficher le score
  const handleScoreShow = () => {
    scoreShow ? setScoreShow(false) : setScoreShow(true);
  };
  // change la variable qui s'occupe d'afficher le score
  const handleLightMode = () => {
    lightMode ? setLightMode(false) : setLightMode(true);
  };
  const resetScore = () => {
    setScore(0);
    setScoreData({ way3: { win: 0, lose: 0, draw: 0 }, way5: { win: 0, lose: 0, draw: 0 } });
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

      // selon le score actualise le score après 2 seconde
      setTimeout(() => {
        tempResult === "YOU WIN" && setScore(score + 1);
        tempResult === "YOU LOSE" && setScore(score - 1);
        // stock le nombre de victoire defaite selon le mode
        setScoreData((prev) => {
          // viens de chatgpt :( psk sinon react detecte pas ducoup faut faire une copie et faut copier chaque objet interne et pas juste l'objet en lui même sinon c'est pas une vrai copie
          const newScoreData = {
            way3: { ...prev.way3 },
            way5: { ...prev.way5 },
          };
          if (tempResult === "YOU WIN") {
            gameType ? newScoreData.way3.win++ : newScoreData.way5.win++;
          } else if (tempResult === "YOU LOSE") {
            gameType ? newScoreData.way3.lose++ : newScoreData.way5.lose++;
          } else if (tempResult === "DRAW") {
            gameType ? newScoreData.way3.draw++ : newScoreData.way5.draw++;
          }
          return newScoreData;
        });
      }, latence);
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
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [ruleShow, setRuleShow] = useState(false);
  const [scoreShow, setScoreShow] = useState(false);
  const [game, setGame] = useState(false);
  const [latence, setLatence] = useState(2000);

  // stock les éléments dans localStorage
  const [gameType, setGameType] = useState(() => {
    // locale storage return un string jsp pk merde ptn
    return localStorage.getItem("gameType") === "true";
  });
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem("lightMode") === "true" ;
  });
  const [score, setScore] = useState(() => {
    return parseInt(localStorage.getItem("score")) || 0;
  });
  const [scoreData, setScoreData] = useState(() => {
    return JSON.parse(localStorage.getItem("scoreData")) || { way3: { win: 0, lose: 0, draw: 0 }, way5: { win: 0, lose: 0, draw: 0 } };
  });
  useEffect(() => {
    localStorage.setItem("gameType", gameType);
  }, [gameType]);
  useEffect(() => {
    localStorage.setItem("lightMode", lightMode);
  }, [lightMode]);
  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);
  useEffect(() => {
    localStorage.setItem("scoreData", JSON.stringify(scoreData));
  }, [scoreData]);

  // selon le gametype change le jeu en 3 ou 5 jeton
  const array = gameType ? jetonInfo3 : jetonInfo5;

  return (
    <>
      <Score handleScoreShow={handleScoreShow} score={score} choice={userChoice} />
      <DivJetons
        handleClick={handleClick}
        launchGame={launchGame}
        array={array}
        userChoice={userChoice}
        computerChoice={computerChoice}
        game={game}
        result={result}
        gameType={gameType}
        latence={latence}
      />
      {/* modal qui s'affiche selon ruleShow */}
      {ruleShow && <Modal gameType={gameType} handleRuleShow={handleRuleShow} />}
      {/* modal qui s'affiche selon scoreShow */}
      {scoreShow && <ModalScore scoreData={scoreData} game={game} handleScoreShow={handleScoreShow} resetScore={resetScore} />}
      <div className="options">
        <button
          onClick={() => {
            // check si le jeu est lancer avant de pouvoir changer de mode de jeu
            if (!game) {
              handleGameType();
            }
          }}
          className="gameModeChange">
          {gameType ? "5 way" : "3 way"}
        </button>
        {/* <button onClick={handleLightMode} className="lightModeChange">
          LightMode
        </button> */}
        <button onClick={handleScoreShow} className="scores">
          SCORE
        </button>
        <button onClick={handleRuleShow} className="rules">
          RULES
        </button>
      </div>
    </>
  );
}

export default App;
