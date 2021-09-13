import logo from "./logo.svg";
import "./App.css";

// components
import PersonOne from "./components/PersonOne";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is my first React App!</p>
      <p className="test">HELLO WORLD</p>
      <PersonOne />
      <Test />
    </div>
  );
}

export default App;
