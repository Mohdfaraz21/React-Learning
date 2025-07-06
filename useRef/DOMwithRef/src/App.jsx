import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();

  function focusOnInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      SignUp
      <input ref={inputRef} id="name" type={"text"}></input>
      <input type={"text"}></input>
      <button onClick={focusOnInput}>Submit</button>
    </div>
  );
}

export default App;
