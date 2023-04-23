import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { REST_API_KEY, REDIRECT_URI } from "./oauth.js";

export default function KakaoRedi() {
    const location = useLocation();
    const navigate = useNavigate();
    const KAKAO_CODE = location.search.split("=")[1];
    console.log(KAKAO_CODE);
    const [token, setToken] = useState("");

    useEffect(() => {
        const getKakaoToken = () => {
            fetch("https://kauth.kakao.com/oauth/token", {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded;charset=utf-8",
                },
                body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${encodeURIComponent(
                    REDIRECT_URI,
                )}&code=${KAKAO_CODE}`,
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error(
                        `Failed to get access token from Kakao. Status: ${response.status}`,
                    );
                })
                .then((data) => {
                    console.log(data);
                    setToken(data.access_token);
                    console.log(token);
                    if (data.access_token) {
                        fetch("http://172.30.46.227:3000/auth/kakao", {
                            method: "POST",
                            headers: {
                                Authorization: data.access_token,
                                "Content-Type":
                                    "application/x-www-form-urlencoded;charset=utf-8",
                            },
                        })
                            .then((res) => res.json())
                            .then((data) =>
                                localStorage.setItem(
                                    "accessToken",
                                    data.accessToken,
                                ),
                            );
                        navigate("/");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        if (!location.search) return;
        getKakaoToken();
    }, [KAKAO_CODE, location.search, navigate, token]);
    useEffect(() => {
        console.log(token);
    }, [token]);
    console.log(token);
    return <div>KakaoLogin</div>;
}
