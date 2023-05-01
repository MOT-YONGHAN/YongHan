import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./form";
import modalReducer from "./LoginModal";
import searchReducer from "./search";
import tokenReducer from "./token";
import detailReducer from "./detail";

const store = configureStore({
    reducer: {
        formReducer,
        modalReducer,
        searchReducer,
        tokenReducer,
        detailReducer,
    },
});
export default store;
