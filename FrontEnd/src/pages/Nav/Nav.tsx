import { useState } from "react";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import logo from "../../assets/images/logo.png";

function Nav() {
    const [isLoginModal, setIsLoginModal] = useState(false);
    const handleShowLogin = () => {
        setIsLoginModal((prev) => !prev);
    };
    return (
        <div className=" border-b-2  pt-2 pl-2 pb-2 border-gray-200">
            {isLoginModal && <Login />}
            <div className="flex justify-between  ml-4  gap-4">
                <div className="flex justify-between w-10/12">
                    <div className="flex gap-10 h-full">
                        <img className="w-24" src={logo} alt="logo" />
                        <div className="flex justify-center items-center gap-10 mr-20">
                            <button
                                className="h-full px-1 hover:border-b border-yonghancolor"
                                type="button"
                            >
                                신점
                            </button>
                            <button
                                className="h-full px-1 hover:border-b border-yonghancolor"
                                type="button"
                            >
                                사주
                            </button>
                            <button
                                className="h-full px-1 hover:border-b border-yonghancolor"
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
                        <button
                            className="h-full px-1 hover:border-b border-yonghancolor"
                            type="button"
                        >
                            찜
                        </button>
                        <button
                            className="h-full px-1 hover:border-b border-yonghancolor"
                            type="button"
                        >
                            최근 본 집
                        </button>
                    </div>
                </div>
                <div className="flex mr-4 w-20 gap-3  ">
                    <button
                        className="h-full p-1 hover:border-b border-yonghancolor"
                        onClick={handleShowLogin}
                        type="button"
                    >
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Nav;
