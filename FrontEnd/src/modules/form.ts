import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    nickname: "",
    name: "",
    email: "",
    password: "",
};

const formSlicer = createSlice({
    name: "form",
    initialState,
    reducers: {
        nicknameHandler: (state, action) => {
            return {
                ...state,
                nickname: action.payload,
            };
        },
        nameHandler: (state, action) => {
            return {
                ...state,
                name: action.payload,
            };
        },
        emailHandler: (state, action) => {
            return {
                ...state,
                email: action.payload,
            };
        },
        passwordHandler: (state, action) => {
            return {
                ...state,
                password: action.payload,
            };
        },
    },
});

export const formAction = formSlicer.actions;
export default formSlicer.reducer;
export interface RootState {
    [x: string]: any;
    form: typeof initialState;
}
