import React, { useState } from "react";
import "./css/Decode.css";
import { decoder } from "./logic";
import TextareaAutosize from "react-textarea-autosize";

function Decode() {
  const [string, setString] = useState("");
  const [output, setOutput] = useState("");

  const decode = (e) => {
    e.preventDefault();

    console.log(string);
    let input = string.replace(/\s+/g, " ");
    setOutput(decoder(input));
  };
  return (
    <div className="decode__container">
      <div className="decode__items">
        <div className="decode__item">
          <p className="decode__inputText">Enter a string to decode</p>

        </div>
        <div className="decode__item">
          <form className="decode__form">
            <TextareaAutosize
              className="decode__input"
              value={string}
              onChange={(e) => setString(e.target.value)}
            />
            <button className="decode__submit myButton" onClick={decode} type="submit">
              Decode
            </button>
          </form>
        </div>
        <div className="decode__item">
          <p className="decode__outputText">{output}</p>
        </div>
      </div>
    </div>
  );
}

export default Decode;
