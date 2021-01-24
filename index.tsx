import React from "react";
import { render } from "react-dom";
import { LoginPage } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.scss";

interface AppProps {}
interface AppState {
  name: string;
}

const App = () => {
  return <LoginPage />;
};

render(<App />, document.getElementById("root"));
