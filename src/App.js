import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>BT Practice Client</p>
        <a className="App-link" href="http://www.btinc.co.kr" target="_blank" rel="noopener noreferrer">
          http://www.btinc.co.kr
        </a>
      </header>
    </div>
  );
}

export default App;
