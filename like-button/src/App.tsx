import "./App.css";
import { useState } from "react";
 
function App() {
  return (
    <>
      <LikeButton />
    </>
  );
}
 
function LikeButton() {
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
  <span className="LikeButton" onClick={handleClick}>
    ♡ {count}
    </span>
  );
}

export default App;