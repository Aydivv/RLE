import React, { useState } from "react";
import "./css/Encode.css";
import { encoder } from "./logic";

function Encode() {
    const [string, setString] = useState("");
    const [output, setOutput] = useState("");

    const encode = e => {
        e.preventDefault()

        let input = string.replace(/\s+/g,' ')
        console.log(input)
        setOutput(encoder(input))
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
