import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <ToggleMessage />
      <Notification />
    </div>
  );
}

const ToggleMessage = () => {
  // useState return a array [true/false, function=setIsVisible]
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered</p>}
    </div>
  );
};

const Notification = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  function increment() {
    setNotificationCount(notificationCount + 1);
  }
  return (
    <div>
      <button onClick={increment}>Notification</button>
      {notificationCount}
    </div>
  );
};
export default App;
