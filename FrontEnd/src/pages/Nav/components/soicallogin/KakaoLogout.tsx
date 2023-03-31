const { Kakao } = window;

let initialized = false;

function initializeKakao() {
    if (!initialized) {
        Kakao.init("d2321e7b724091fc6a90ece3441d6dde");
        initialized = true;
    }
}

function KakaoLogout() {
    const handleLogout = () => {
        Kakao.Auth.logout(() => {
            console.log("logout");
        });
    };

    if (!initialized) {
        initializeKakao();
    }

    return (
        <div>
            <button type="button" onClick={handleLogout}>
                로그아웃
            </button>
        </div>
    );
}

export default KakaoLogout;
