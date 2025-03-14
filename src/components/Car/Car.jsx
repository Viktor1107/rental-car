import React from "react";
import s from "./Car.module.css";

const Car = ({ img, brand, model, rentalPrice }) => {
  return (
    <div className={s.carCard}>
      <img src={img} alt={`${brand} ${model}`} className={s.carImage} />
      <h3>
        {brand} {model}
      </h3>
      <p className={s.carPrice}>${rentalPrice}</p>
      <button className={s.carButton}>Read more</button>
    </div>
  );
};

export default Car;
