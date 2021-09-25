// function Test() {
//   return (
//     <div className="test">
//       <h1>TEST Component</h1>
//       <p>this is my first function component.</p>
//     </div>
//   );
// }

// export default Test;

// const Functional = ({ props }) => <button>props</button>;
// export default Functional;

import { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = { name: "Angela" };
  }

  render() {
    return <h1>{this.state.name}</h1>;
  }
}

export default Test;
