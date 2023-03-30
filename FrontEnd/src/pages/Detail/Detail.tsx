import ProductInfo from "./components/ProductInfo";
import ProductMap from "./components/ProductMap";
import ProductReview from "./components/ProductReview";
import ReviewComment from "./components/ReviewComment";

function Detail() {
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
