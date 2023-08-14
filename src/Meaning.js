import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning.synonyms);
  return (
    // Checks if Meaning props is empty or not, if empty displays the string "none"
    <div className="Meaning mt-3">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p className="m-2">
        <strong>Definition: </strong>
        {props.meaning.definition}
      </p>
      <p className="m-2">
        <em>
          <strong>Example: </strong>
          {props.meaning.example ? props.meaning.example : " none"}
        </em>
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
