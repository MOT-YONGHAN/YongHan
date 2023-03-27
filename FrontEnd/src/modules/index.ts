import { configureStore } from "@reduxjs/toolkit";

const reducer = () => {
    return "test";
};

const store = configureStore({
    reducer,
});
export default store;
