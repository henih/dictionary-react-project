import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function getKeyword(response) {
    console.log(response.data.meanings[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "oa503cb248d231a90f14935068e8t36f";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURL).then(getKeyword);
  }
  return (
    <div className="Dictionary d-flex justify-content-center mt-2">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          autoFocus
          onChange={updateKeyword}
          className="Search-field"
        />
        <input type="submit" value="Search" className="Search-button"></input>
      </form>
    </div>
  );
}
