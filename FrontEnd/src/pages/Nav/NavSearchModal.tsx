import React from "react";

export default function NavRecentSeenModal({ onOpenSearchModal }: any) {
    return (
        <div className="h-full w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center">
            <div className="bg-white rounded w-10/12 md:w-1/3">
                <div className="px-4 py-2 flex justify-end items-center">
                    <span onClick={onOpenSearchModal}>
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

                <div className="flex justify-center items-center text-gray-500 text-xl px-4 py-8 gap-4">
                    <span className="material-symbols-outlined">search</span>
                    <input
                        className="border-b border-gray-300"
                        placeholder="검색"
                        type="text"
                    />
                </div>
                <div className="flex justify-end items-center w-100 p-3 text-gray-500">
                    <button
                        onClick={onOpenSearchModal}
                        className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white"
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
}
