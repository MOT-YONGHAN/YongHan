import { useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import Login from "./components/Login";

function Nav() {
    const [isLoginModal, setIsLoginModal] = useState(false);
    const handleShowLogin = () => {
        setIsLoginModal((prev) => !prev);
    };
    return (
        <div className="border-b-2  pt-5 pb-6 border-yonghancolor">
            {isLoginModal && <Login />}
            <div className="flex justify-between  ml-4   gap-4">
                <div className="flex justify-between w-10/12">
                    <span>YOUNG HAN</span>
                    <div className="w-48 flex justify-between">
                        <button type="button">오늘의 운세</button>
                        <button type="button">최근 본 집</button>{" "}
                        <RxMagnifyingGlass size={25} />
                    </div>
                </div>
                <div className="flex mr-4 w-20 gap-3 ">
                    <button onClick={handleShowLogin} type="button">
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Nav;
