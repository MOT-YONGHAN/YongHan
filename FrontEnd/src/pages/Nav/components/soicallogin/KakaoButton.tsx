import { SiKakaotalk } from "react-icons/si";
import { REST_API_KEY, REDIRECT_URI } from "./oauth.js";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;
function KakaoButton() {
    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };
    return (
        <div
            role="button"
            tabIndex={0}
            onMouseDown={handleLogin}
            className="flex items-center justify-center gap-2 w-full bg-yhBlue3 h-10 hover:border-2 hover:cursor-pointer border-yonghancolor"
        >
            <SiKakaotalk />
            <button className="items-center justify-center" type="button">
                카카오 로그인
            </button>
        </div>
    );
}

export default KakaoButton;
