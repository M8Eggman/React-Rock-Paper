import "./App.css";
import Score from "./component/score/Score";
import DivJetons from "./component/divJetons/divJetons";


function App() {
  return (
    <>
      <Score score={9} />
      <DivJetons />
    </>
  );
}

export default App;
