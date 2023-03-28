import { SiNaver, SiKakaotalk } from "react-icons/si";
import { VscClose } from "react-icons/vsc";
import logo from "../../../assets/images/logo.png";

export default function Login() {
    return (
        <div className="fixed top-24 right-5  border-2 border-yonghancolor rounded-xl z-10  pt-6 max-md:w-3/6  w-[350px] overflow-hidden">
            <div className="mx-auto w-10/12">
                <div className="flex justify-between  h-9">
                    <span>로그인</span>
                    <VscClose size={20} />
                </div>
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
            <div className="flex flex-col items-start justify-center mt-2">
                <div className="flex items-center justify-center  w-full">
                    {/* <img className="w-10 rounded-70%" alt="LOGO" src={logo} /> */}
                    <button className="bg-yhBlue1 w-full h-10" type="button">
                        회원가입
                    </button>
                </div>

                <div className="flex items-center justify-center gap-2 w-full bg-yhBlue2 h-10">
                    <SiNaver />
                    <button
                        className="items-center justify-center"
                        type="button"
                    >
                        네이버 로그인
                    </button>
                </div>
                <div className="flex items-center justify-center gap-2 w-full bg-yhBlue3 h-10">
                    <SiKakaotalk />
                    <button
                        className="items-center justify-center"
                        type="button"
                    >
                        카카오 로그인
                    </button>
                </div>
            </div>
        </div>
    );
}
