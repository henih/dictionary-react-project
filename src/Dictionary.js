import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function getKeyword(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "oa503cb248d231a90f14935068e8t36f";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURL).then(getKeyword);
  }
  return (
    <div className="Dictionary">
      <form
        onSubmit={handleSubmit}
        className="justify-content-center d-flex m-3"
      >
        <input
          type="search"
          autoFocus
          onChange={updateKeyword}
          className="Search-field shadow"
        />
        <input
          type="submit"
          value="Search"
          className=" shadow Search-button"
        ></input>
      </form>
      <p className="Dictionary-examples justify-content-center d-flex">
        {" "}
        Examples: sunset, sunrise, Moon, quantum...
      </p>
      <Results results={results} />
    </div>
  );
}
