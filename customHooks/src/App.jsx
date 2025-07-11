
import { useState } from 'react'
import './App.css'

// declare a customHook with named useCounter.
function useCounter() {
  const [count, setCount] = useState(0);


  function increaseCount() {
    setCount(count + 1)
    // setCount(c => c  +1)
  }

  //Return an object containing the current count and the function to increase it.
  // This is how the custom hook expose its state and logic to the component that use it.
  return {
    count: count,
    increaseCount:increaseCount
  }
}

function App() {
const {count, increaseCount} = useCounter();
  return (
    
  <div>
    <button onClick={increaseCount}>Increase {count}</button>
  </div>
  )
}

export default App

/* Explanation in hinglish
--------------------------
jab ham react me reuseable logic ko ek function ke form me likhte hai aur jiska name
"use" se start ho {useCounter} like this to hum use customHook kehte hai.
1.isme hum predefined hook ka istemal kar skte hai

*/