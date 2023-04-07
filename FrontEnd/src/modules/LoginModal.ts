import { createSlice } from "@reduxjs/toolkit";

interface LoginModalState {
    ismodal: boolean;
    likemodal: boolean;
    lastestmodal: boolean;
    login: boolean;
}
const initialState: LoginModalState = {
    ismodal: false,
    likemodal: false,
    lastestmodal: false,
    login: false,
};
const loginModalSlice = createSlice({
    name: "loginmodal",
    initialState,
    reducers: {
        toggleModal: (state) => {
            return { ...state, ismodal: !state.ismodal };
        },
        likeModal: (state) => {
            return { ...state, likemodal: !state.likemodal };
        },
        lastestModal: (state) => {
            return { ...state, lastestmodal: !state.lastestmodal };
        },
        login: (state) => {
            return { ...state, login: !state.login };
        },
    },
});

export const { toggleModal, likeModal, lastestModal, login } =
    loginModalSlice.actions;
export default loginModalSlice.reducer;
export interface loginRootState {
    [x: string]: any;
    loginmodal: typeof initialState;
}
