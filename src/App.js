import React from "react";
import "./App.css";
import AppForm from "./components/AppForm";
import AppBasic from "./components/AppBasic";

function App(props) {
  const app = props.application;
  if (app === "form") {
    return <AppForm />;
  } else {
    return <AppBasic />;
  }
}

export default App;
