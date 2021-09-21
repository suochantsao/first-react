import logo from "./logo.svg";
import "./App.css";

// components
import PersonOne from "./components/PersonOne";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is my first React App!</p>
      <PersonOne age="28"></PersonOne>
    </div>
  );
}

export default App;
