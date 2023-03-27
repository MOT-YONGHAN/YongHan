export default function Login() {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
            <div className="border-2 border-gray-200">
                <div>로그인</div>
                <div className="flex flex-col">
                    <input type="text" placeholder="아이디" />
                    <input type="text" placeholder="비밀번호" />
                </div>
                <div>
                    <label htmlFor="save">
                        <input type="checkbox" id="save" />
                        아이디저장
                    </label>
                    <button type="button">비밀번호 찾기</button>
                </div>
            </div>
        </div>
    );
}
