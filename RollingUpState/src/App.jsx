import { useState } from 'react'
import './App.css'

function App() {
  return <div>
   <Parent />
  </div>
}

function Parent() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      {/* a child component and passes the handle increment function as prop called onIncrement
      > This is where state lifting happen - the state lives in Parent, but the logic 
      to trigger a change is passed to the child. */}
      <Child onIncrement={handleIncrement} />
    </div>
  );
}

/* here the Child component receives props from the parent, and destructure onIncrement from it. */
function Child(props) {
  const { onIncrement } = props;
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}


/* function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true) */

  /* bulbOn is a prop to the Bulb State component.
  bulbOn, setBulbOn are props tot he ToggleBulbState component. */
 /*  return <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function BulbState({bulbOn}) {
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState({bulbOn, setBulbOn}) {

  function toggle() {
    setBulbOn(!bulbOn)
    
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
} */

export default App

/* Rolling up state means the same as "lifting state up", and its
all about moving shared state to the closest common parent of two or more 
components that need to access or update 
> Instead of duplicating state in each components, you can lift the state up to the LOWEST COMMON ANCESTOR,
allowing the common ancestor to manage it.*/
