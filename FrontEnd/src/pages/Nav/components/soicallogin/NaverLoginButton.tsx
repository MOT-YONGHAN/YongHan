import { useState } from "react";
import { SiNaver } from "react-icons/si";
import {
    NAVER_CLIENT_ID,
    NAVER_CLIENT_SECRET,
    NAVER_REDIRECT_URI,
} from "./oauth.js";

function NaverLoginButton() {
    const [accessToken, setAccessToken] = useState<string | null>(null);

    // 네이버 로그인 버튼 클릭 시 네이버 로그인 페이지로 이동하는 함수
    const handleLoginClick = () => {
        window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}`;
    };

    // 네이버 로그인 페이지에서 로그인 후 callback url로 이동했을 때 호출되는 함수
    const handleCallback = async () => {
        // 현재 url에서 code 파라미터 값을 가져옴
        const code = new URL(window.location.href).searchParams.get("code");

        // code 값이 있을 경우에만 토큰 발급 요청을 보냄
        if (code) {
            try {
                const response = await fetch(
                    `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_CLIENT_SECRET}&redirect_uri=${encodeURIComponent(
                        NAVER_REDIRECT_URI,
                    )}&code=${code}`,
                    {
                        method: "POST",
                    },
                );

                const data = await response.json();

                // 토큰 발급 성공 시 받아온 access_token을 상태에 저장
                if (data.access_token) {
                    setAccessToken(data.access_token);
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    // 토큰이 있을 경우 API 호출을 하는 함수
    const callAPI = async () => {
        try {
            const response = await fetch(
                "https://openapi.naver.com/v1/nid/me",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                },
            );

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    // 토큰이 있으면 API 호출 함수를 호출하고, 토큰이 없으면 로그인 버튼을 렌더링
    if (accessToken) {
        callAPI();
        return <div>네이버 로그인 완료</div>;
    }

    // 토큰이 없으면 로그인 버튼을 렌더링
    return (
        <div
            role="button"
            tabIndex={0}
            onMouseDown={handleLoginClick}
            className="flex items-center justify-center gap-2 w-full bg-yhBlue2 h-10 hover:border-2 hover:cursor-pointer border-yonghancolor"
        >
            <SiNaver />
            <button type="button">네이버 로그인</button>
        </div>
    );
}

export default NaverLoginButton;
