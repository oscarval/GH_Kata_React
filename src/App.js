import React from "react";
import "./App.css";
import { Person } from "./components/Person";
import Counter from "./components/Counter";
import CounterFunctional from "./components/CounterFunctional";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Person name='Alexis' surname='Valdez' age='30' />
        <Person name='Juan' surname='Pérez' age={27} />
        <Person name='David' surname='Ochando' age={97} />
        <Counter initialValue={5} step={2}/>
        <CounterFunctional initialValue={5} step={2}/>
      </header>
    </div>
  );
}

export default App;
