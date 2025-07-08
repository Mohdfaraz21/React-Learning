import { createContext, useContext, useState } from "react";


// creating a new context object.
//this will be used to provide (share) and consume (Access) the count value.
const CountContext = createContext(); 

// that wrap the child component
// initialize state: count:0 and setCount:function to be update that value
function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);
// <CountContext.Provider> a component that 1. that share count and setCount with all child inside it
  return (
    //value={{ count, setCount }} make both available to use in nested components via useContext
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function Parent() {
  return (
    // wrapping three child component with the <CountContextProvider />, giving them access to shared count state.
    <CountContextProvider>
      <Increase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

// this component uses useContext to get count and  setCount from context
function Decrease() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}
//this component uses useContext to get count and  setCount from context
function Increase() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}
// the component only reads count from context and display it inside a paragraph.
function Value() {
  const { count } = useContext(CountContext);
  return <p>Count: {count}</p>;
}
// App Component
const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default App;

/* the bad thing is that in context Api is it render all the component unnecessary where we need not to render all the component.
 that unnecessary render leads to slow our app.
that why we use state management library 
shift + alt + a
*/
 