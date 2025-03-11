import React from "react";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <h1>Find your perfect rental car </h1>
      <h3>Reliable and budget-friendly rentals for any journey</h3>
      <button>View Catalog</button>
    </div>
  );
};

export default HomePage;
