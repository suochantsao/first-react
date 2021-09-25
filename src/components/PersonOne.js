import { Fragment } from "react";

function PersonOne(props) {
  return (
    <Fragment>
      <h1>Bill</h1>
      <p>Your Age: {props.children}</p>
    </Fragment>
  );
}

export default PersonOne;
