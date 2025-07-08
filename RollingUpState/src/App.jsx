import { useState } from 'react'
import './App.css'

function App() {
  return <div>
    <LightBulb />
  </div>
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true)

  /* bulbOn is a prop to the Bulb State component.
  bulbOn, setBulbOn are props tot he ToggleBulbState component. */
  return <div>
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
}

export default App

/* Rolling up state means the same as "lifting state up", and its
all about moving shared state to the closest common parent of two or more 
components that need to access or update 
> Instead of duplicating state in each components, you can lift the state up to the LOWEST COMMON ANCESTOR,
allowing the common ancestor to manage it.*/
