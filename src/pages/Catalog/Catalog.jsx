import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCars } from "../../redux/cars/operations.js";
import Car from "../../components/Car/Car";
import s from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.list.cars || []);
  const loading = useSelector((state) => state.cars.loading);
  const error = useSelector((state) => state.cars.error);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1>Catalog</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}

      {cars.length > 0 && (
        <div className={s.carsGrid}>
          {cars.map(
            ({
              id,
              year,
              address,
              rentalCompany,
              type,
              mileage,
              img,
              brand,
              model,
              rentalPrice,
            }) => (
              <Car
                key={id}
                img={img}
                brand={brand}
                model={model}
                rentalPrice={rentalPrice}
                year={year}
                address={address}
                company={rentalCompany}
                type={type}
                mileage={mileage}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Catalog;
