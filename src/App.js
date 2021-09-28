import { Component } from "react";
import "./style/css/App.css";
// import logo from "./logo.svg";

// components
import PersonOne from "./components/PersonOne";
import Timer from "./components/Timer";

// function App() {
//   return (
//     <div className="App">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>This is my first React App!</p>
//       <PersonOne>28</PersonOne>
//       <Test></Test>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  toggleTimer() {
    this.setState({
      timerOn: !this.state.timerOn,
    });
  }

  render() {
    const buttonText = this.state.timerOn ? "停止timer" : "開啟timer";
    return (
      <div>
        <button onClick={this.toggleTimer}>{buttonText}</button>
        {this.state.timerOn && <Timer />}
        <PersonOne />
      </div>
    );
  }
}

export default App;
