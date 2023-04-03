import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./form";

const store = configureStore({
    reducer: formReducer,
});
export default store;
