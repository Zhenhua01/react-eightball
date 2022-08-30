import { useState } from "react";
import answersList from "./answers";
import "./EightBall.css";

function EightBall({ answers = answersList }) {

  const [answer, setAnswer] = useState({
    msg: "Think of a Question",
    color: "black",
    green : 0,
    red: 0,
    gold: 0
  });

  function incrementColor(color){
    if (color === "green") answer.green++;
    if (color === "red") answer.red++;
    if (color === "goldenrod") answer.gold++;
  }

  function handleAnswer() {
    const idx = Math.floor(Math.random() * answers.length);

    incrementColor(answers[idx].color);

    setAnswer({
      msg: answers[idx].msg,
      color: answers[idx].color,
      green: answer.green,
      red: answer.red,
      gold: answer.gold
    }
    );
  }

  function handleReset() {
    setAnswer({
      msg: "Think of a Question",
      color: "black"
    }
    );
  }

  const styles = {
    backgroundColor: answer.color
  };

  return (
    <div>

      <div className="EightBall" style={styles} onClick={ handleAnswer }>
        <p className="Message"> {answer.msg} </p>
      </div>

      <p> green: {answer.green} </p>
      <p> red: {answer.red} </p>
      <p> gold: {answer.gold} </p>

      <button className="btn" onClick={ handleReset }>
        Reset Eight Ball
      </button>

    </div>
  );
}


export default EightBall;