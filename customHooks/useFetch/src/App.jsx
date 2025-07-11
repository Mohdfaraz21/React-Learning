import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  /* state "currentPost" is used to track which post number (1,2,3) to fetch.
  initially set 1 */
  const [currentPost, setCurrentPost] = useState(1);
  /* => call your custom hook useFetch() with a dynamic URL.
  => this trigger a fetch to a different post depending on currentPost.
  => destructure the returned object to get finalData and loading. */
  const { finalData, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + currentPost
  );
  /* => while loading is true, the component shows a loading message.
  => React will return early and not render anything else until loading false. */
  if (loading) {
    return <div>Loading.....</div>;
  }

  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </div>
  );
}

export default App;
