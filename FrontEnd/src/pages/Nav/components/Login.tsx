import { SiNaver, SiKakaotalk } from "react-icons/si";

export default function Login() {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-yonghancolor rounded-xl z-10 px-2 py-6 max-md:w-3/6  w-[350px]">
            <div className="mx-auto w-10/12">
                <div className="h-9">로그인</div>
                <div className="flex">
                    <form className="flex flex-col">
                        <input
                            className=" h-9"
                            type="text"
                            placeholder="아이디"
                        />
                        <input
                            className="h-9"
                            type="password"
                            placeholder="비밀번호"
                        />
                    </form>
                    <div className=" h-auto ml-2 flex content-center  items-center w-1/3 rounded-md text-white bg-yonghancolor">
                        <p className="mx-auto">로그인</p>
                    </div>
                </div>
                <div className="flex justify-between p-1 h-9">
                    <label className="my-auto" htmlFor="save">
                        <input type="checkbox" id="save" />
                        아이디저장
                    </label>
                    <button type="button">비밀번호 찾기</button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <button type="button">회원가입</button>
                <div className="flex text-center items-center justify-center">
                    <SiNaver />
                    <button
                        className="items-center justify-center"
                        type="button"
                    >
                        네이버 로그인
                    </button>
                </div>
                <div className="flex">
                    <SiKakaotalk />
                    <button type="button">카카오 로그인</button>
                </div>
            </div>
        </div>
    );
}
