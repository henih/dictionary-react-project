import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function getKeyword(response) {
    setResults(response.data);
  }

  function search() {
    const apiKey = "oa503cb248d231a90f14935068e8t36f";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURL).then(getKeyword);

    const imageApiKey = "oa503cb248d231a90f14935068e8t36f";
    let imageApiURL = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiURL).then(handleImageResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  //If loaded state false run this return with defaultKeyword value
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
