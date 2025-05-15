import "./DivJetons.css";
import Jeton from "../jeton/Jeton";
import scissors from "../../assets/images/icon-scissors.svg";
import paper from "../../assets/images/icon-paper.svg";
import rock from "../../assets/images/icon-rock.svg";
import lizard from "../../assets/images/icon-lizard.svg";
import spock from "../../assets/images/icon-spock.svg";

function DivJetons() {
  const jetonInfo3 = [
    { img: paper, position: "0-3", color: "linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%))" },
    { img: scissors, position: "1-3", color: "linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))" },
    { img: rock, position: "2-3", color: "linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))" },
  ];
// TODO game with 5 choice
//   const jetonInfo5 = [
//     { img: scissors, position: "0-5", color: "linear-gradient(to top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))" },
//     { img: paper, position: "1-5", color: "linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%))" },
//     { img: rock, position: "2-5", color: "linear-gradient(to top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))" },
//     { img: lizard, position: "3-5", color: "linear-gradient(to top, hsl(261, 73%, 60%), hsl(261, 72%, 63%))" },
//     { img: spock, position: "4-5", color: "linear-gradient(to top, hsl(189, 59%, 53%), hsl(189, 58%, 57%))" },
//   ];

  return (
    <>
      <div className="divJeton">
        {jetonInfo3.map((element, index) => {
          return <Jeton key={index} img={element.img} color={element.color} position={element.position} />;
        })}
      </div>
    </>
  );
}

export default DivJetons;
