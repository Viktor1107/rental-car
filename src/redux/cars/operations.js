import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const carsApi = axios.create({
//   baseURL: "https://car-rental-api.goit.global/cars",
// });

// export const fetchAllCars = createAsyncThunk(
//   "cars/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await carsApi.get("/cars");

//       return response.data.cars;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

axios.defaults.baseURL = "https://car-rental-api.goit.global/cars";

export const fetchAllCars = async (cars) => {
  const response = await axios.get();
  return response.data.cars;
};
