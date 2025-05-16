import "./Modal.css";
import close from "../../assets/images/icon-close.svg";
import rule3Jeton from "../../assets/images/image-rules.svg";
import rule5Jeton from "../../assets/images/image-rules-bonus.svg";
function Modal(props) {
  return (
    <>
      <div onClick={props.handleRuleShow} className="modalRuleBackground">
        <div className="modalRule">
          <div onClick={(e) => e.stopPropagation()} className="modalRuleTitle">
            <p>RULES</p>
            <button onClick={props.handleRuleShow}>
              <img src={close} alt="" />
            </button>
          </div>
          <img src={props.gameType ? rule3Jeton : rule5Jeton} alt="" />
        </div>
      </div>
    </>
  );
}

export default Modal;
