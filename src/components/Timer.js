// class Test extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);

//     this.state = { name: "Angela" };
//   }

//   render() {
//     return <h1>{this.state.name}</h1>;
//   }
// }

import { Component } from "react";

class Timer extends Component {
  constructor(e) {
    e.preventDefault();
  }
  // Mounting 生命週期的方法
  componentDidMount() {
    console.log("componentDidMount");
    this.timer = window.setInterval(() => {
      console.log("hello world");
    }, 1000);
  }
  // UnMounting 生命週期的方法
  componentWillUnmount() {
    window.clearInterval(this.timer);
    console.log("componentWillUnmount");
  }
  // Class Component 必備的 render() 方法
  render() {
    return <div>timer is running</div>;
  }
}

export default Timer;
