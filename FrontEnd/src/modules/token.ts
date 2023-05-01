import { createSlice } from "@reduxjs/toolkit";

interface SearchSlice {
    token: string | null;
}

const initialState: SearchSlice = {
    token: "",
};

const toekenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        tokenHandelr: (state, action) => {
            return { ...state, token: action.payload };
        },
    },
});

export const { tokenHandelr } = toekenSlice.actions;
export default toekenSlice.reducer;
export interface RootState {
    [x: string]: any;
    search: typeof initialState;
}
