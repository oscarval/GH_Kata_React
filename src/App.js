import React from "react";
import "./App.css";
import AppForm from "./components/appForm/AppForm";
import AppBasic from "./components/appBasic/AppBasic";

function App(props) {
  const app = props.application;
  if (app === "form") {
    return (
      <div className='App'>
        <header className='App-header'>
          <AppForm />
        </header>
      </div>
    );
  } else {
    return (
      <div className='App'>
        <header className='App-header'>
          <AppBasic />
        </header>
      </div>
    );
  }
}

export default App;
