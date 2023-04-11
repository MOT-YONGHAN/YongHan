import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nickname: "",
    name: "",
    email: "",
    password: "",
    socialTypeId: "LOCAL",
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
        // vaildpasswordsHandler: (state, action) => {
        //     return {
        //         ...state,
        //         vaildPassword: action.payload,
        //     };
        // },
    },
});

export const formAction = formSlicer.actions;
export default formSlicer.reducer;
export interface RootState {
    [x: string]: any;
    form: typeof initialState;
}
