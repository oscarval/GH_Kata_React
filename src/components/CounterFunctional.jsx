import React, { useState, useEffect } from "react";

const CounterFuntional = (props) => {
  const [counter, setCounter] = useState(props.initialValue);

  useEffect(() => {
    console.log("The component did mount");
    return () => {
      console.log("The component will unmount");
    };
  }, []);

  useEffect(() => {
      console.log('The component did update');
  });

  const increment = () => {
    setCounter(counter + props.step);
  };

  const decrement = () => {
    if (counter - props.step >= 0) {
      setCounter(counter - props.step);
    } else {
      setCounter(0);
    }
  };

  return (
    <div className='Counter'>
      <h3>Component Counter Functional</h3>
      <div className='main'>
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default CounterFuntional;
