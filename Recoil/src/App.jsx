import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";

// Atom definition (global state)
const countState = atom({
  key: "countState", // unique ID for this piece of state
  default: 0, // initial value
});

// Parent component: provides RecoilRoot to children
function Parent() {
  return (
    <RecoilRoot>
       <Increase />
       <Decrease />
       <Value />{" "}
    </RecoilRoot>
  );
}

// Decrease component: uses setRecoilState to decrement the count
function Decrease() {
  const setCount = useSetRecoilState(countState);
  return <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>;
}

// Increase component: uses setRecoilState to increment the count
function Increase() {
  const setCount = useSetRecoilState(countState);
  return <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>;
}

// Value component: reads and displays the current count
function Value() {
  const countValue = useRecoilValue(countState);
  return <p>Count: {countValue}</p>;
}

// App component: wraps everything in a div
const App = () => {
  return (
    <div>
     <Parent />{" "}
    </div>
  );
};

export default App;
