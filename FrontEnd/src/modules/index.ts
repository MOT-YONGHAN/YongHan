import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./form";
import modalReducer from "./LoginModal";
import searchReducer from "./search";
import tokenReducer from "./token";

const store = configureStore({
    reducer: { formReducer, modalReducer, searchReducer, tokenReducer },
});
export default store;
