import logo from "./logo.svg";
import "./App.css";

// 1. https://cs1300-personas-storyboarding.pages.dev/
// 2. https://cs1300-responsive-redesign.pages.dev/
// 4. https://cs1300-iterative-design-ewz.pages.dev/
// 5. https://luckylion777.github.io/project-5-development/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
