/* eslint-disable no-plusplus */
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import {
    RootState,
    commentHandler,
    updateTimeHandler,
} from "/src/modules/detail.ts";

function ProductReview() {
    const [clicked, setClicked] = useState([false, false, false, false, false]);
    const array = [0, 1, 2, 3, 4];
    const handleStarClick = (index: number) => {
        const clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
            clickStates[i] = i <= index;
        }
        setClicked(clickStates);
    };

    const score = clicked.filter(Boolean).length; // 점수계산

    const dispatch = useDispatch();

    const userReview = useSelector((state: RootState) => state.reviewReducer);

    const [reviewTextLength, setReviewTextLength] = useState("");

    const reviewHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReviewTextLength(event.target.value);
        dispatch(commentHandler(event.target.value));
        dispatch(updateTimeHandler(new Date()));
    };

    const sendReviewInfo = () => {
        fetch(``, {
            method: "POST",
            headers: {
                // token: localStorage.getItem(""),

                "Content-Type": "application/json;charset=utf-8",
            },
        }).then((response) => response.json());
    };

    return (
        <div className="border-b border-solid border-slate-200 pb-[40px] ">
            <div className=" flex justify-between border-b border-solid border-black pb-3">
                <h2 className="text-2xl font-bold">
                    (가게이름)후기
                    <span className="text-red-600 "> 32</span>
                </h2>
                <div className="flex ">
                    {array.map((i) => (
                        <CiStar
                            key={i}
                            className="w-[35px] h-[35px] text-black"
                        />
                    ))}

                    <span className="relative top-1 text-2xl ml-2">
                        <b>4.3 </b>/ 5
                    </span>
                </div>
            </div>
            <div className="border border-solid border-slate-300 mt-10 rounded-md  pt-[20px]">
                <div className="starRatePicker flex mb-[18px] px-[20px]">
                    {array.map((el) => (
                        <CiStar
                            key={el}
                            onClick={() => {
                                handleStarClick(el);
                            }}
                            className={`w-[35px] h-[35px] ${
                                clicked[el] ? "text-yellow-500" : "text-black"
                            }`}
                        />
                    ))}
                </div>
                <textarea
                    className="w-[100%] h-[84px] outline-none resize-none text-[15px] px-[20px]"
                    placeholder="용한 후기를 남겨보세요!"
                    maxLength={1000}
                    onChange={reviewHandler}
                    value={reviewTextLength}
                />
                <div className="border-t border-solid border-slate-300 flex justify-between">
                    <span />
                    <div className=" flex px-[20px] items-center ]">
                        <span className=" ">
                            {reviewTextLength.length}
                            <span className="text-slate-400 text-[15px]">
                                /1000
                            </span>
                        </span>
                        <button
                            type="button"
                            className="px-[18px] h-[36px] bg-slate-600 text-white rounded-md my-3 ml-3"
                            onClick={sendReviewInfo}
                        >
                            등록
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductReview;
