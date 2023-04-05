import { CiStar } from "react-icons/ci";

import Img from "../../../assets/images/logo.png";

function ReviewComment() {
    const images = [Img, Img, Img, Img, Img];

    const commentRate = Array(5).fill(
        <CiStar className="w-[18px] h-[15px] text-black" />,
    );
    return (
        <div className="reviewCommentWrapper my-10 border-b border-solid border-slate-300 pb-10">
            <div className="userInfo flex items-center">
                <div className="userthumbnail w-[40px] h-[40px] rounded-[50%] flex justify-center mr-3">
                    <img src={Img} alt="유저이미지" />
                </div>
                <div className="userDetail columns-auto items-center">
                    <span className="text-md text-[14px] font-bold">
                        장찬영
                    </span>
                    <div className="flex items-center">
                        {commentRate}
                        <span className="text-[12px] ml-1">2023.03.31</span>
                    </div>
                    <div className="text-[12px]">점집 이름</div>
                </div>
            </div>
            <div className="photoReview grid grid-cols-6 gap-4 my-5">
                {images.map((img, index) => (
                    <img
                        key={img}
                        className="w-[87px] h-[87px] overflow-hidden hover:cursor-pointer"
                        src={img}
                        alt={`사진 ${index + 1}`}
                    />
                ))}
            </div>
            <div className="commentZone">
                <span className="text-[15px] ">
                    너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요
                    너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요
                    너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요
                    너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요
                    너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요
                    너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요
                    너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요
                    너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요
                    너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요
                    너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요
                    너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요
                    너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요
                    너무 잘 맞춰요 너무 잘 맞춰요 너무 잘 맞춰요
                </span>
            </div>
        </div>
    );
}

export default ReviewComment;
