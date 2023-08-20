import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
 // console.log(props.meaning.synonyms);
  return (
    // Checks if Meaning props is empty or not, if empty displays the string "none"
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="Definition">
        <strong>Definition: </strong>
        {props.meaning.definition}
      </div>

      <div className="Example">
        <strong>Example: </strong>
        {props.meaning.example ? props.meaning.example : " none"}
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
