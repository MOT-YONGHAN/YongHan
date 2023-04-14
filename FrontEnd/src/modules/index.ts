import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./form";
import modalReducer from "./LoginModal";
import reviewReducer from "./detail";

const store = configureStore({
    reducer: { formReducer, modalReducer, reviewReducer },
});
export default store;
