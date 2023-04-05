import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./form";
import modalReducer from "./LoginModal";

const store = configureStore({
    reducer: { formReducer, modalReducer },
});
export default store;
