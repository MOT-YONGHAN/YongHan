import axios from "axios";
import { useState, useEffect } from "react";
import ProductInfo from "./components/ProductInfo";
import ProductMap from "./components/ProductMap";
import ProductReview from "./components/ProductReview";
import ReviewComment from "./components/ReviewComment";

function Detail() {
    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        axios
            .get("/data/test.json", {})
            .then((response) => setProductInfo(response.data.data[0]))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="flex justify-center ">
            <div className="columns-auto  w-[1120px]">
                <ProductInfo productInfo={productInfo} />
                <ProductMap productInfo={productInfo} />
                <ProductReview />
                <ReviewComment />
            </div>
        </div>
    );
}

export default Detail;
