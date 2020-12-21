import * as React from "react";
import { render } from "react-dom";
import {StateProvider} from "./StateProvider"
import App from "./App";
import reducer,{initialState} from "./reducer"

const rootElement = document.getElementById("root");
render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  rootElement
);
