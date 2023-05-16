import { CiShare2, CiStar } from "react-icons/ci";
import logoImg from "../../../assets/images/logo.png";

function ProductInfo(props: any) {
    const { productInfo } = props;

    const filledStars = Math.floor(productInfo.score);
    const halfStar = productInfo.score % 1 !== 0;

    const stars = Array(5).fill(
        <CiStar className="w-[30px] h-[30px] text-slate-500 " />,
    );

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < filledStars; i++) {
        stars[i] = <CiStar className="w-[30px] h-[30px] text-yellow-500 " />;
    }

    if (halfStar) {
        stars[filledStars] = (
            <CiStar className="w-[30px] h-[30px] text-yellow-500 " />
        );
    }

    return (
        <div className="productInfoWrapper  flex w-[1120px] mt-[64px]">
            <img
                className="thumbnail bg-neutral-500 overflow-hidden object-cover w-[405px] h-[500px]"
                alt="thumnail"
                src={logoImg}
            />
            <div className="productInfo  w-[100%] pl-[50px] columns-auto">
                <section className="productTitleWrapper flex mt-4 pb-4 pr-75px justify-between border-b border-solid border-black">
                    <h1 className="productTitle text-3xl font-bold">
                        {productInfo.name}
                    </h1>
                    <div className="productShare">
                        <CiShare2 className="w-[30px] h-[30px] relative top-2 hover:cursor-pointer" />
                    </div>
                </section>
                <div className="flex border-b border-solid border-zinc-400 justify-between">
                    <div className="flex ">
                        <section className="mr-[35px]">
                            {INFO.map((data) => {
                                return (
                                    <li key={data.id} className="flex my-6">
                                        <h2 className=" w-[80px] text-slate-500">
                                            {data.title}
                                        </h2>
                                    </li>
                                );
                            })}
                        </section>
                        <div className="columns-auto ">
                            <p className="my-6">{productInfo.category}</p>
                            <p className="my-6">{productInfo.address}</p>
                            <p className="my-6">{productInfo.description}</p>
                        </div>
                    </div>
                    <section className="rateZone flex my-6 mr-3 ">
                        <div className="flex ">{stars}</div>
                        <span className="ml-1 relative top-2 text-[14px]">
                            (34)
                        </span>
                    </section>
                </div>
                <section className="priceZone my-6 flex">
                    <h2 className="w-[80px] text-slate-500 my-3">가격</h2>
                    <div className="priceList columns-auto  ml-[35px]">
                        {productInfo.price}
                        {/* {PRICE_DATA.map((data) => {
                            return (
                                <p key={data.id} className="ml-[35px] my-3 ">
                                    {data.category}
                                    <span className="ml-[35px]">
                                        {data.price}원
                                    </span>
                                </p>
                            );
                        })} */}
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
    { id: 3, title: "설명" },
];

const PRICE_DATA = [
    { id: 1, category: "커플타로", price: "30000" },
    { id: 2, category: "직업타로", price: "40000" },
    { id: 3, category: "취업타로", price: "50000" },
];
