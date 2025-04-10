import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars/carsSlice";
import favoritesReducer from "./filters/favoritesSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: favoritesReducer,
  },
});

// import { configureStore } from "@reduxjs/toolkit";

// const initialState = {
//   tasks: {
//     items: [
//       { id: 0, text: "Learn HTML and CSS", completed: true },
//       { id: 1, text: "Get good at JavaScript", completed: true },
//       { id: 2, text: "Master React", completed: false },
//       { id: 3, text: "Discover Redux", completed: false },
//       { id: 4, text: "Build amazing apps", completed: false },
//     ],
//   },
//   filters: {
//     status: "all",
//   },
// };

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// export const store = configureStore({
//   reducer: rootReducer,
// });
