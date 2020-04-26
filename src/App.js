import React from "react";
import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className='App'>
      <main>
        <Person name="Alexis" surname="Valdez" age='30'/>
        <Person name="Juan" surname="Pérez" age={27}/>
        <Person name="David" surname="Ochando" age={97}/>
      </main>
    </div>
  );
}

export default App;
