import { CiShare2, CiStar } from "react-icons/ci";
import logoImg from "../../../assets/images/logo.png";

function ProductInfo() {
    const stars = Array(5).fill(
        <CiStar className="w-[40px] h-[40px] text-slate-500 " />,
    );

    return (
        <div className="productInfoWrapper  flex w-[1120px] mt-[64px]">
            <img
                className="thumbnail bg-neutral-500 overflow-hidden object-cover w-[405px] h-[500px]"
                alt="thumnail"
                src={logoImg}
            />
            <div className="productInfo  w-[100%] pl-[50px] columns-auto">
                <section className="productTitleWrapper flex mt-4 pb-4  pr-75px justify-between border-b border-solid border-black">
                    <h1 className="productTitle text-3xl font-bold">
                        타로타로타타로 (Tarotarotarotataro)
                    </h1>
                    <div className="productShare">
                        <CiShare2 className="w-[40px] h-[40px] hover:pointer" />
                    </div>
                </section>
                <div className="flex border-b border-solid border-zinc-400 justify-between">
                    <section>
                        {INFO.map((data) => {
                            return (
                                <li key={data.id} className="flex my-6">
                                    <h2 className=" w-[80px] text-slate-500">
                                        {data.title}
                                    </h2>
                                    <p className="ml-[35px] "> 정보들 </p>
                                </li>
                            );
                        })}
                    </section>
                    <section className="rateZone flex my-6 mr-3 ">
                        <div className="flex ">{stars}</div>
                        <span className="ml-1 relative top-3.5 ">(34)</span>
                    </section>
                </div>
                <section className="priceZone my-6 flex">
                    <h2 className="w-[80px] text-slate-500 my-3">가격</h2>
                    <div className="priceList columns-auto">
                        {PRICE_DATA.map((data) => {
                            return (
                                <p key={data.id} className="ml-[35px] my-3 ">
                                    {data.category}
                                    <span className="ml-[35px]">
                                        {data.price}원
                                    </span>
                                </p>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProductInfo;

const INFO = [
    { id: 1, title: "카테고리" },
    { id: 2, title: "장소" },
    { id: 3, title: "전화번호" },
];

const PRICE_DATA = [
    { id: 1, category: "커플타로", price: "30000" },
    { id: 2, category: "직업타로", price: "40000" },
    { id: 3, category: "취업타로", price: "50000" },
];
