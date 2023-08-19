import "./App.css";
import Dictionary from "./Dictionary";
import LogoSvg from "./img/earth-americas-solid.svg";

export default function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div>
        <div className="Container shadow">
          <header className="App-header">
            <h1 className="text-center mt-3">
              <img src={LogoSvg} alt="Your SVG" className="Logo" />
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
          </main>
        </div>
        <footer className="text-center m-2">
          Coded by{" "}
          <a href="mailto:horvath.henriett@gmail.com">Henriett Horvath</a>
        </footer>
      </div>
    </div>
  );
}
