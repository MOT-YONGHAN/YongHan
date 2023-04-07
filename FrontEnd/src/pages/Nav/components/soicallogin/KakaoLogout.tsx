import { useEffect } from "react";

const { Kakao } = window;

function KakaoLogout() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    const handleKakaoLogout = () => {
        if (window.Kakao) {
            // Kakao 객체가 로드되었는지 확인합니다.
            window.Kakao.Auth.logout(() => {
                console.log("User is logged out from Kakao.");
            });
        } else {
            console.log("Kakao SDK not loaded yet.");
        }
    };
    return (
        <div>
            <button type="button" onClick={handleKakaoLogout}>
                로그아웃
            </button>
        </div>
    );
}

export default KakaoLogout;
