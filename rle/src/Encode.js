import React, { useState } from "react";
import "./css/Encode.css";
import { encoder } from "./logic";

function Encode() {
    const [string, setString] = useState("");
    const [output, setOutput] = useState("");
    const [caseToggle, setCaseToggle] = useState(true)

    const encode = e => {
        e.preventDefault()

        let input = string.replace(/\s+/g,' ')
        setOutput(encoder(input,caseToggle))
    }
  return (
    <div className="encode__container">
      <p>Enter a string to encode</p>
      <form>
      <input className="encode__input" value ={string} onChange={e => setString(e.target.value)} type="text"></input>
      <button className="encode__submit" onClick={encode} type="submit"> Encode </button>
      </form>
      <p className="encode__output">{output || ""}</p>
    </div>
  );
}

export default Encode;
