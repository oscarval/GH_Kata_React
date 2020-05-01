import React, { useState } from "react";
import "./App.css";
import { Person } from "./components/Person";
import Counter from "./components/Counter";
import CounterFunctional from "./components/CounterFunctional";
import UnreadMessage from "./components/UnreadMessage";

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

        <UnreadMessage unreadMessage={["hello!"]} />

        <h3>Child and loops</h3>
        <Padre max={10}>
          {(index) => <div key={index}>Thi item have index {index}</div>}
        </Padre>
        <LoopFor></LoopFor>
      </header>
    </div>
  );
}

const Padre = (props) => {
  const items = [];
  for (let index = 0; index < props.max; index++) {
    items.push(props.children(index));
  }
  return items;
};

const LoopFor = (props) => {
  const data = ["hola", "desde", "la tienda"];
  return (
    <div>
      {data.map((el) => (
        <p key={el}>{el}</p>
      ))}
    </div>
  );
};

export default App;
