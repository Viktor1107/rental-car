import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { CarsList } from "./components/CarsList/CarsList";
import SearchBox from "./components/SearchBox/SearchBox";
import NotFound from "./pages/NotFound/NotFound";
import { NavLink, Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(() => {
  //   const savedCount = window.localStorage.getItem("saved-count");

  //   return savedCount !== null ? Number(savedCount) : 0;
  // });
  // const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   window.localStorage.setItem("saved-count", JSON.stringify(count));
  // }, [count]);

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/SearchBox">Search</NavLink>
        <NavLink to="/Carlist">Cars</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchBox" element={<SearchBox />} />
        <Route path="/carlist" element={<CarsList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

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
