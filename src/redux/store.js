import { configureStore } from "@reduxjs/toolkit";
import potententialCountriesReducer from "../redux/slices/potentialCountriesSlice";
import displayCountryReducer from "../redux/slices/displayCountrySlice";

export default configureStore({
  reducer: {
    potententialCountries: potententialCountriesReducer,
    displayCountry: displayCountryReducer,
  },
});
