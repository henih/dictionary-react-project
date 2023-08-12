import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <h1 className="text-center mt-3">
            World of Words - a Dictionary app
          </h1>
        </header>
        <main>
          <h4 className="text-center">What do you have on your mind?</h4>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by{" "}
          <a href="mailto:horvath.henriett@gmail.com">Henriett Horvath</a>
        </footer>
      </div>
    </div>
  );
}
