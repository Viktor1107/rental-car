import { carsApi } from "../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://car-rental-api.goit.global/api";

export const fetchAllCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await carsApi.get("/cars");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCarId = createAsyncThunk(
  "car/fetchId",
  async (__id, thunkAPI) => {
    try {
      const response = await carsApi.get(`/cars/${_id}`);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// axios.defaults.baseURL = "https://car-rental-api.goit.global/cars";

// export const fetchAllCars = async () => {
//   const { data } = await axios.get(`${carsApi}/cars`);
//   return data;
// };
