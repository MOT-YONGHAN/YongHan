import { useState, useEffect } from "react";
import { SiNaver } from "react-icons/si";
import { useLocation } from "react-router-dom";
import {
    NAVER_REDIRECT_URI,
    NAVER_CLIENT_ID,
    NAVER_CLIENT_SECRET,
} from "./oauth";

declare global {
    interface Window {
        naver: any;
    }
}

function NaverLoginButton() {
    const [accessToken, setAccessToken] = useState<string>("");
    const location = useLocation();

    const loginFormWithNaver = () => {
        const naverLogin = new window.naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_REDIRECT_URI,
            clientSecret: NAVER_CLIENT_SECRET,
            isPopup: false,
            loginButton: { color: "white", type: 3, height: "10" },
        });
        naverLogin.init();
    };

    useEffect(() => {
        loginFormWithNaver();
    }, []);

    useEffect(() => {
        if (window.location.href.includes("access_token")) {
            setAccessToken(window.location.href.split("=")[1].split("&")[0]);
            window.location.replace("/");
        }
    }, []);

    return (
        <div
            role="button"
            tabIndex={0}
            id="naverIdLogin"
            className="flex items-center justify-center gap-2 w-full bg-yhBlue2 h-10 hover:border-2 hover:cursor-pointer border-yonghancolor"
        >
            <SiNaver />
            <button type="button">네이버 로그인</button>
        </div>
    );
}

export default NaverLoginButton;
