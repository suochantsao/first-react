import { Fragment } from "react";
import { useState } from "react";

function PersonOne() {
  const [test] = useState(100);

  return (
    <Fragment>
      <h1>Bill</h1>
      <p>Your Age: {test}</p>
    </Fragment>
  );
}

export default PersonOne;
