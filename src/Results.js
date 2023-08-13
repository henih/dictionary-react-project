import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  console.log(props);

  if (props.results.word) {
    return (
      <div className="Results">
        <h3>{props.results.word}</h3>
        <p>
          <em>{props.results.phonetic}</em>
        </p>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
