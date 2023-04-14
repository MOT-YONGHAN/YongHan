import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    updateTime: {},
    reviewComment: "",
};

// review reduer, detail page reducer 분리
// detail page : 가게 이름, 전화번호, 리뷰 점수, 위치
// review : 유저 닉네임, 프로필 사진, 리뷰 점수, 업로드 날짜, 리뷰 내용

const detailSlicer = createSlice({
    name: "detail",
    initialState,
    reducers: {
        updateTimeHandler: (state, action) => {
            return {
                ...state,
                updateTime: action.payload,
            };
        },
        commentHandler: (state, action) => {
            return {
                ...state,
                reviewComment: action.payload,
            };
        },
    },
});

export const { updateTimeHandler, commentHandler } = detailSlicer.actions;
export default detailSlicer.reducer;
export interface RootState {
    [x: string]: any;
    form: typeof initialState;
}
