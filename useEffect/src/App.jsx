import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  function increaseCount() {
    setCount((currentValue) => currentValue + 1);
  }
  function decreaseCount() {
    setCount2((currentValue) => currentValue - 1);
  }

  // this effect run only once, when it mount to dom
  useEffect(function () {
    console.log("above setInterval");
    setInterval(increaseCount, 1000);
    setInterval(decreaseCount, 5000);
  }, []); // this effect will run on mount, because the array is empty.


  // this side effects run anytime count changes.
  useEffect(function() {
    console.log("the count has been updated to " + count);
  }, [count, count2])

  return <div>{count} {count2}</div>;
}

export default App;
