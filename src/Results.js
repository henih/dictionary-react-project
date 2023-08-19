import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import "./Phonetics.css";

export default function Results(props) {
  if (props.results.word) {
    return (
      <div className="Results">
        <section>
          <h3>{props.results.word}</h3>
          <p className="Phonetics">
            <em>{props.results.phonetic}</em>
          </p>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index} className="mt-4">
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
