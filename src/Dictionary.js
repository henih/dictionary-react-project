import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
