import { useRef } from "react";
import "./App.css";

function App() {
  //useRef is a Hook to create a persistent reference to a DOM node
  const inputRef = useRef(); 

  function focusOnInput() {
    //inputRef.current that access the actual elt after render.
    //.focus() is Native DOM method to focus the input.
    inputRef.current.focus();
  }

  return (
    //ref={inputRef} Bind the input elt to that reference.
    <div>
      
      SignUp
      <input ref={inputRef} id="name" type={"text"}></input>
      <input type={"text"}></input>
      <button onClick={focusOnInput}>Submit</button>
    </div>
  );
}

export default App;
