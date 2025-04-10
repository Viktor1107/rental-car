import { useState, useEffect } from "react";
import "./App.css";
// import HomePage from "./pages/HomePage/HomePage";
// import  CarsList  from "./components/CarsList/CarsList";
// import SearchBox from "./components/SearchBox/SearchBox";
// import NotFound from "./pages/NotFound/NotFound";
import { NavLink, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppBar from "./components/AppBar/AppBar";
import SvgSprite from "./components/SvgSprite/SvgSprite";
// import Catalog from "./pages/Catalog/Catalog";
// import CarDetails from "./pages/CarDetails/CarDetails";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const CarDetails = lazy(() => import("./pages/CarDetails/CarDetails"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <>
      <SvgSprite />
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<CarDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

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

{
  /* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>`You clicked ${count} times`</p>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>}
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>} */
}
