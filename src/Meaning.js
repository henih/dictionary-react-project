import React from "react";
export default function Meaning(props) {
  console.log(props);
  return (
    // Checks if Meaning props is empty or not, if empty displays the string "none"
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <p>
        <em>
          Example:
          {props.meaning.example ? props.meaning.example : " none"}
        </em>
      </p>
    </div>
  );
}
