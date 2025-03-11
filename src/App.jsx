import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { CarsList } from "./components/CarsList/CarsList";

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = window.localStorage.getItem("saved-count");

    return savedCount !== null ? Number(savedCount) : 0;
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("saved-count", JSON.stringify(count));
  }, [count]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CarsList />

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>`You clicked ${count} times`</p>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>}
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>} */}
    </>
  );
}

export default App;
