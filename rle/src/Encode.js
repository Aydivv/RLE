import React, { useState } from "react";
import "./css/Encode.css";
import { encoder } from "./logic";
import TextareaAutosize from 'react-textarea-autosize';

function Encode() {
  const [string, setString] = useState("");
  const [output, setOutput] = useState("");
  const [caseToggle, setCaseToggle] = useState(true);

  const encode = (e) => {
    e.preventDefault();

    console.log(string)
    let input = string.replace(/\s+/g, " ");
    setOutput(encoder(input, caseToggle));
  };
  return (
    <div className="encode__container">
      <div className="encode__items">
        <div className="encode__item">
          <p className="encode__inputText">Enter a string to encode</p>
        </div>
        <div className="encode__item">
          <form className="encode__form">
            <TextareaAutosize
              className="encode__input"
              value={string}
              onChange={(e) => {setString(e.target.value)}}
            />
            <button
              className="encode__submit"
              onClick={encode}
              type="submit"
            >
              {" "}
              Encode{" "}
            </button>
          </form>
        </div>
        <div className="encode__item">
          <p className="encode__outputText">{output || ""}</p>
        </div>
      </div>
    </div>
  );
}


export default Encode;
