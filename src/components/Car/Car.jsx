import React from "react";

const Car = ({ img, brand, model, rentalPrice }) => {
  return (
    <div className="car-card">
      <img src={img} alt={`${brand} ${model}`} className="car-image" />
      <h3>
        {brand} {model}
      </h3>
      <p className="car-price">${rentalPrice}</p>
      <button className="car-button">Read more</button>
    </div>
  );
};

export default Car;
