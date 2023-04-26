import { VscClose } from "react-icons/vsc";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import KakaoButton from "./soicallogin/KakaoButton";
import NaverLoginButton from "./soicallogin/NaverLoginButton";
import {
    loginRootState,
    toggleModal,
    login,
} from "../../../modules/LoginModal";

function FormChange() {
    const [loginForm, setLoginForm] = useState({
        id: "",
        password: "",
    });
    const dispatch = useDispatch();
    const formhandler: boolean = useSelector(
        (state: loginRootState) => state.modalReducer.ismodal,
    );

    const handleSigup = () => {
        return formhandler && dispatch(toggleModal());
    };
    const closeModal = () => {
        dispatch(login());
    };
    const handleForm = (e: { target: { name: any; value: any } }) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value,
        });
        console.log(loginForm);
    };
    const handleSubmit = () => {
        localStorage.setItem("accessToken", "새ㅏ두");
        // fetch("http://192.168.35.155:3000/auth/signin", {
        //     method: "POST",
        //     body: JSON.stringify(loginForm),
        // })
        //     .then((response) => response.json())
        //     .then((data) =>
        //         localStorage.setItem("accessToken", data.accessToken),
        //     );
        // setLoginForm({
        //     id: "",
        //     password: "",
        // });
    };
    return (
        <div className="fixed top-24 right-5  border-2 border-yonghancolor rounded-xl z-10  pt-6  max-md:w-3/6  w-[350px] overflow-hidden">
            <div className="mx-auto w-10/12">
                <div className="flex justify-between  h-9">
                    <span>로그인</span>
                    <VscClose
                        onClick={closeModal}
                        className="hover:cursor-pointer"
                        size={20}
                    />
                </div>
                <div className="flex">
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <input
                            onChange={handleForm}
                            className=" h-9"
                            value={loginForm.id}
                            name="id"
                            type="text"
                            placeholder="이메일"
                        />
                        <input
                            onChange={handleForm}
                            className="h-9"
                            value={loginForm.password}
                            name="password"
                            type="password"
                            placeholder="비밀번호"
                        />
                    </form>
                    <div
                        role="button"
                        tabIndex={0}
                        onMouseDown={handleSubmit}
                        className=" h-auto ml-2 flex content-center hover:cursor-pointer items-center w-1/3 rounded-md text-white bg-yonghancolor"
                    >
                        <p className="mx-auto ">로그인</p>
                    </div>
                </div>
                <div className="flex justify-between p-1 h-9">
                    <label className="my-auto" htmlFor="save">
                        <input type="checkbox" id="save" />
                        아이디저장
                    </label>
                    <button type="button">비밀번호 찾기</button>
                </div>
                <div className="flex flex-col items-start justify-center mt-2 gap-2 pb-6">
                    <div
                        role="button"
                        tabIndex={0}
                        onMouseDown={handleSigup}
                        className="flex items-center justify-center  w-full"
                    >
                        <button
                            className="bg-yhBlue1 w-full h-10 hover:border-2 border-yonghancolor"
                            type="button"
                        >
                            회원가입
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 w-full bg-yhBlue2 h-10 hover:border-2 hover:cursor-pointer border-yonghancolor">
                        <NaverLoginButton />
                    </div>
                    <KakaoButton />
                </div>
            </div>
        </div>
    );
}

export default FormChange;
