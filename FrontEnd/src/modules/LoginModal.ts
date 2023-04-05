import { createSlice } from "@reduxjs/toolkit";

interface LoginModalState {
    ismodal: boolean;
}
const initialState: LoginModalState = { ismodal: false };
const loginModalSlice = createSlice({
    name: "loginmodal",
    initialState,
    reducers: {
        toggleModal: (state) => {
            return { ...state, ismodal: !state.ismodal };
        },
    },
});

export const { toggleModal } = loginModalSlice.actions;
export default loginModalSlice.reducer;
export interface loginRootState {
    [x: string]: any;
    loginmodal: typeof initialState;
}
