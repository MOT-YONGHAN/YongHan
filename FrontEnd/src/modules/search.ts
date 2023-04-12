import { createSlice } from "@reduxjs/toolkit";

interface SearchSlice {
    input: string;
}

const initialState: SearchSlice = {
    input: "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchInput: (state, action) => {
            return { ...state, input: action.payload };
        },
    },
});

export const { searchInput } = searchSlice.actions;
export default searchSlice.reducer;
export interface RootState {
    [x: string]: any;
    search: typeof initialState;
}
