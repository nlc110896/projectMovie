import React from "react";
import { Route } from "react-router-dom";

export default function Home(props) {
  return (
    <Route exact={props.exact} path={props.path} component={props.component} />
  );
}
