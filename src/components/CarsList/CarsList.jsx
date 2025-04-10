import axios from "axios";
import { useEffect, useState } from "react";
import Car from "../Car/Car";
import { fetchAllCars } from "../../redux/cars/operations";
import { useDispatch } from "react-redux";
import s from "./CarsList.module.css";

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //   const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCars() {
      try {
        setLoading(true);
        const data = await fetchAllCars();
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  console.log(cars);

  return (
    <div className={s.carlist}>
      <h1>Cars</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {cars.length > 0 && (
        <ul>
          {cars.map(
            ({
              id,
              year,
              type,
              description,
              fuelConsumption,
              engineSize,
              accessories,
              functionalities,
              rentalCompany,
              address,
              rentalConditions,
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
                year={year}
                address={address}
                company={rentalCompany}
                type={type}
                mileage={mileage}
                model={model}
                rentalPrice={rentalPrice}
              />
            )
          )}
        </ul>
      )}
    </div>
  );
};
export default CarsList;
