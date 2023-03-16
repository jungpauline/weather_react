import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React app</h1>
        <Weather city="Paris"/>
      </header>
    </div>
  );
}

export default App;
