import { configureStore } from "@reduxjs/toolkit";
import potententialCountriesReducer from "../redux/slices/potentialCountriesSlice";


export default configureStore({
  reducer: { potententialCountries: potententialCountriesReducer},
});
