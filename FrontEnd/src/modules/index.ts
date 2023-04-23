import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./form";
import modalReducer from "./LoginModal";
import searchReducer from "./search";

const store = configureStore({
    reducer: { formReducer, modalReducer, searchReducer },
});
export default store;
