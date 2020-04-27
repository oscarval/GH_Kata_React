import React, { useState } from "react";
import "./App.css";
import { Person } from "./components/Person";
import Counter from "./components/Counter";
import CounterFunctional from "./components/CounterFunctional";

function App() {
  const [stateCounter, showCounters] = useState(true);
  const removeCounters = () => showCounters(false);
  return (
    <div className='App'>
      <header className='App-header'>
        <Person name='Alexis' surname='Valdez' age='30' />
        <Person name='Juan' surname='Pérez' age={27} />
        <Person name='David' surname='Ochando' age={97} />
        {stateCounter && (
          <React.Fragment>
            <Counter initialValue={5} step={2} />
            <CounterFunctional initialValue={5} step={2} />
          </React.Fragment>
        )}

        <button onClick={removeCounters}>Remove Counter</button>
      </header>
    </div>
  );
}

export default App;
