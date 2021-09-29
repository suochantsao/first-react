import { Fragment, useState, useEffect } from "react";

function PersonOne() {
  const [test] = useState(100);
  const [test2] = useEffect();

  return (
    <Fragment>
      <h1>Bill</h1>
      <p>
        Your Age: {test}
        {test2}
      </p>
    </Fragment>
  );
}

export default PersonOne;
