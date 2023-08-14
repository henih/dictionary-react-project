import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results.word) {
    return (
      <div className="Results">
        <h3>{props.results.word}</h3>
        <p className="mt-0">
          <em>{props.results.phonetic}</em>
        </p>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index} className="mt-4">
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
