import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function getKeyword(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "oa503cb248d231a90f14935068e8t36f";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURL).then(getKeyword);
  }

  function load() {
    setLoaded(true);
    search();
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {
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
            defaultValue={props.defaultKeyword}
          />
          <input
            type="submit"
            value="Search"
            className=" shadow Search-button"
          ></input>
        </form>

        <p className="Dictionary-examples text-center">
          {" "}
          Examples: sunset, sunrise, Moon, quantum...
        </p>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
