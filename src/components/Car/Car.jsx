import React from "react";
import s from "./Car.module.css";

const addressSplit = (address) => {
  const parts = address.split(",");
  const city = parts[1]?.trim();
  const country = parts[parts.length - 1]?.trim();
  return `${city} | ${country} `;
};

const Car = ({
  id,
  year,
  address,
  company,
  type,
  mileage,
  img,
  brand,
  model,
  rentalPrice,
}) => {
  return (
    <div className={s.carCard}>
      <img src={img} alt={`${brand} ${model}`} className={s.carImage} />
      <div className={s.firstSection}>
        <h3 className={s.h3}>
          {brand} {model}, {year}
        </h3>
        <p className={s.carPrice}>${rentalPrice}</p>
      </div>
      <p className={s.details}>
        {addressSplit(address)} | {company} | {type} | {mileage}
      </p>
      <button className={s.carButton}>Read more</button>
    </div>
  );
};

export default Car;
