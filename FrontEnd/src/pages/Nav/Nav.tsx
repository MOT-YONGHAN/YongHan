import { useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import Login from "./components/Login";

function Nav() {
    const [isLoginModal, setIsLoginModal] = useState(false);
    const handleShowLogin = () => {
        setIsLoginModal((prev) => !prev);
    };
    return (
        <div className="border-b-2 border-gray-200 ">
            {isLoginModal && <Login />}
            <div className="flex justify-between mt-3 ml-4 p-2">
                <div className="flex justify-between w-[1200px]">
                    <span>YOUNG HAN</span>
                    <div className="w-44 flex justify-between">
                        <button type="button">오늘의 운세</button>
                        <button type="button">최근 본 집</button>
                    </div>
                </div>
                <div className="flex justify-between mr-4 w-20">
                    <button onClick={handleShowLogin} type="button">
                        로그인
                    </button>
                    <RxMagnifyingGlass size={25} />
                </div>
            </div>
        </div>
    );
}

export default Nav;
