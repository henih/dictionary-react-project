import "./App.css";
import ScrollToTop from "react-scroll-to-top";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div>
        <div className="Container shadow">
          <header className="App-header">
            <h1 className="text-center mt-3">
              <strong>World of Words</strong> <br />{" "}
            </h1>
            <h2 className="text-center">
              {" "}
              <small>A Dictionary app </small>
            </h2>
          </header>
          <main>
            <h4 className="text-center">What do you have on your mind?</h4>
            <Dictionary defaultKeyword="surf" />
            <ScrollToTop smooth />
          </main>
        </div>
        <footer className="text-center mb-3">
          Coded by{" "}
          <a href="mailto:horvath.henriett@gmail.com">Henriett Horvath</a> and
          is open-sourced on{" "}
          <a
            href="https://github.com/henih/dictionary-react-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
