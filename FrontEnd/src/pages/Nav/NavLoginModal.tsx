import { Login } from "../../api/firebase";

export default function NavLoginModal({ onOpenLoginModal }: any) {
    return (
        <div className="h-full w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center">
            <div className="bg-white rounded w-10/12 md:w-1/3">
                <div className="border-b px-4 py-2 flex justify-between items-center">
                    <h3 className="font-extrabold">로그인</h3>
                    <span onClick={onOpenLoginModal}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </span>
                </div>

                <button
                    onClick={Login}
                    className="text-gray-500 text-sm px-4 py-4 cursor-pointer"
                >
                    구글로그인
                </button>
                <div className="text-gray-500 text-sm px-4 py-4 cursor-pointer">
                    페이스북로그인
                </div>
                <div className="flex justify-end items-center w-100 border-t p-3 text-gray-500">
                    <button
                        onClick={onOpenLoginModal}
                        className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white"
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
}
