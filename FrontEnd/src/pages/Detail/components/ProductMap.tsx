import { useEffect } from "react";

const { kakao } = window;

function ProductMap() {
    useEffect(() => {
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        const map = new kakao.maps.Map(container, options);

        const mapTypeControl = new kakao.maps.MapTypeControl();

        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    }, []);

    return (
        <>
            <div className="mapTitle mt-[90px] mb-3 pb-5 border-b border-solid border-slate-300">
                <h2 className="text-2xl font-bold">(점집 이름) 위치</h2>
            </div>
            <div id="map" className="w-[100%] h-[660px] my-[30px]" />
            <div className="flex justify-between pb-[30px] mb-[50px] border-b border-solid border-slate-300">
                <span className="leading-loose tracking-wider text-lg">
                    주소: 어디입니다.
                </span>
                <button
                    type="button"
                    onClick={() => {
                        window.open(
                            "https://map.kakao.com/link/to/카카오판교오피스,37.402056,127.108212",
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
