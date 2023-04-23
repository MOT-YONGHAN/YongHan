import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./form";
import modalReducer from "./LoginModal";
import searchReducer from "./search";
import detailReducer from "./detail";

const store = configureStore({
    reducer: { formReducer, modalReducer, searchReducer, detailReducer },
});
export default store;
