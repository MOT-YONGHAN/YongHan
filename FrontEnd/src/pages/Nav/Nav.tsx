import { useState } from "react";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import logo from "../../assets/images/logo.png";
import Lastest from "./components/Lastest";
import Save from "./components/Save";

function Nav() {
    const [isLoginModal, setIsLoginModal] = useState(false);
    const [showLastest, setLastest] = useState(false);
    const [showSave, setShowSave] = useState(false);
    const handleShowLogin = () => {
        setIsLoginModal((prev) => !prev);
    };
    const hadleShowLastest = () => {
        setLastest((prev) => !prev);
    };

    const handleShowSave = () => {
        setShowSave((prev) => !prev);
    };

    return (
        <div className=" pt-2  pb-2">
            {isLoginModal && <Login />}

            <div className="flex justify-between   h-20  gap-4">
                <div className="flex justify-between  border-b-2  border-gray-200 w-full">
                    <div className="flex gap-10 pl-4  h-full">
                        <img className="w-24 my-auto" src={logo} alt="logo" />
                        <div className="flex justify-center items-center gap-10 mr-20">
                            <button
                                className="h-full px-1  hover:border-b-2 border-yonghancolor"
                                type="button"
                            >
                                신점
                            </button>
                            <button
                                className="h-full px-1 hover:border-b-2 border-yonghancolor"
                                type="button"
                            >
                                사주
                            </button>
                            <button
                                className="h-full px-1 hover:border-b-2 border-yonghancolor"
                                type="button"
                            >
                                타로
                            </button>
                        </div>
                    </div>
                    <div className="my-auto">
                        <SearchBar />
                    </div>
                    <div className="w-48 flex justify-around">
                        <div>
                            <button
                                onClick={handleShowSave}
                                className="h-full px-1 hover:border-b-2 border-yonghancolor"
                                type="button"
                            >
                                찜
                            </button>
                            {showSave && <Save />}
                        </div>
                        <div>
                            <button
                                onClick={hadleShowLastest}
                                className="h-full px-1 hover:border-b-2 border-yonghancolor"
                                type="button"
                            >
                                최근 본 집
                            </button>
                            {showLastest && <Lastest />}
                        </div>
                    </div>
                    <div className="flex mr-4 w-20 gap-3  ">
                        <button
                            className="h-full p-1 hover:border-b-2 border-yonghancolor"
                            onClick={handleShowLogin}
                            type="button"
                        >
                            로그인
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
