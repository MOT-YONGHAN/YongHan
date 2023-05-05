import axios from "axios";
import { useState, useEffect } from "react";
import ProductInfo from "./components/ProductInfo";
import ProductMap from "./components/ProductMap";
import ProductReview from "./components/ProductReview";
import ReviewComment from "./components/ReviewComment";

function Detail() {
    const [productInfo, setProductInfo] = useState();

    useEffect(() => {
        axios
            .get("http://192.168.219.21:3001/store/detail/372", {})
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="flex justify-center ">
            <div className="columns-auto  w-[1120px]">
                <ProductInfo />
                <ProductMap />
                <ProductReview />
                <ReviewComment />
            </div>
        </div>
    );
}

export default Detail;
