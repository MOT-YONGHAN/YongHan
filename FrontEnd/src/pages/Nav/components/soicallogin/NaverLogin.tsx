import { useEffect } from "react";

function NaverLogin() {
    const loginFormWithNaver = () => {
        const naverLogin = new window.naver.LoginWithNaverId({
            clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
            callbackUrl: "http://localhost:3001/login",
            isPopup: false,
            loginButton: { color: "white", type: 2, height: "45" },
        });
        naverLogin.init();
    };

    useEffect(() => {
        loginFormWithNaver();
    }, []);

    return <div id="naverIdLogin" />;
}

export default NaverLogin;
