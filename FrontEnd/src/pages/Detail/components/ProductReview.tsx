import { CiStar } from "react-icons/ci";

function ProductReview() {
    const stars = Array(5).fill(
        <CiStar className="w-[35px] h-[35px] text-black " />,
    );
    const ratePicker = Array(5).fill(
        <CiStar className="w-[23px] h-[23px] text-black " />,
    );

    return (
        <>
            <div className=" flex justify-between border-b border-solid border-black pb-3">
                <h2 className="text-2xl font-bold">
                    (가게이름)후기
                    <span className="text-red-600 "> 32</span>
                </h2>
                <div className="flex ">
                    {stars}
                    <span className="relative top-1 text-2xl ml-2">
                        <b>4.3 </b>/ 5
                    </span>
                </div>
            </div>
            <div className="border border-solid border-slate-300 mt-10 rounded-md  pt-[20px]">
                <div className="starRatePicker flex mb-[18px] px-[20px]">
                    {ratePicker}
                </div>
                <textarea
                    className="w-[100%] h-[84px] outline-none resize-none text-[15px] px-[20px]"
                    placeholder="용한 후기를 남겨보세요!"
                    maxLength={1000}
                />
                <div className="border-t border-solid border-slate-300 flex justify-between">
                    <span />
                    <div className=" flex px-[20px] items-center ]">
                        <span className=" ">
                            ???
                            <span className="text-slate-400 text-[15px]">
                                /1000
                            </span>
                        </span>
                        <button
                            type="button"
                            className="px-[18px] h-[36px] bg-slate-600 text-white rounded-md my-3 ml-3"
                        >
                            등록
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductReview;
