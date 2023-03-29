import ProductInfo from "./components/ProductInfo";
import ProductMap from "./components/ProductMap";
import ProductReview from "./components/ProductReview";

function Detail() {
    return (
        <div className="flex justify-center ">
            <div className="columns-auto">
                <ProductInfo />
                <ProductMap />
                <ProductReview />
            </div>
        </div>
    );
}

export default Detail;
