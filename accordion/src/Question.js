import { useState } from "react";
import "./Question.css";

function Question({ obj, index }) {
  const [Open, setOpen] = useState(false);
  function handleOnClick() {
    setOpen((cur) => !cur);
  }
  return (
    <div className={`item ${Open ? "open-item" : ""}`} onClick={handleOnClick}>
      <div className="question-container">
        <em>{String(index + 1).padStart(2, "0")}</em>
        <em>{obj.question}</em>
        <em>{Open ? "-" : "+"}</em>
      </div>
      {Open ? <p>{obj.answer}</p> : <></>}
    </div>
  );
}

export default Question;
