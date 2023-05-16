import { useEffect, useState } from "react";

const { kakao } = window;

function ProductMap(props: any) {
    const { productInfo } = props;
    const [productAddress, setProductAdderss] = useState({
        x: null,
        y: null,
    });

    useEffect(() => {
        const geocoder: any = new kakao.maps.services.Geocoder();

        const callback = function (result: any, status: any) {
            if (status === kakao.maps.services.Status.OK) {
                const address = result[0];
                setProductAdderss({ x: address.x, y: address.y });
            }
        };
        geocoder.addressSearch(productInfo.address, callback);

        const container = document.getElementById("map");
        const options = {
            // center: new kakao.maps.LatLng(33.450701, 126.570667),
            center: new kakao.maps.LatLng(
                `${productAddress.x}, ${productAddress.y}`,
            ),
            level: 3,
        };
        const map = new kakao.maps.Map(container, options);

        const mapTypeControl = new kakao.maps.MapTypeControl();

        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    }, [productAddress.x, productAddress.y, productInfo.address]);
    console.log(productAddress);

    return (
        <>
            <div className="mapTitle mt-[90px] mb-3 pb-5 border-b border-solid border-slate-300">
                <h2 className="text-2xl font-bold">{productInfo.name} 위치</h2>
            </div>
            <div id="map" className="w-[100%] h-[660px] my-[30px] " />
            <div className="flex justify-between pb-[30px] mb-[50px] border-b border-solid border-slate-300">
                <span className="leading-loose tracking-wider text-lg">
                    주소: {productInfo.address}
                </span>
                <button
                    type="button"
                    onClick={() => {
                        window.open(
                            `https://map.kakao.com/link/to/${productInfo.name},${productAddress.x},${productAddress.y}`,
                            "_blank",
                        );
                    }}
                    className="w-[200px] h-[50px] bg-slate-500 rounded-md text-slate-50"
                >
                    빠른 길찾기
                </button>
            </div>
        </>
    );
}

export default ProductMap;
