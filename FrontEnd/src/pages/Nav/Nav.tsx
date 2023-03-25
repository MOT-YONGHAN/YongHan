import { useState } from "react";
import { Link } from "react-router-dom";
import NavLikeListModal from "./NavLikeListModal";
import NavLoginModal from "./NavLoginModal";
import NavRecentSeenModal from "./NavRecentSeenModal";
import NavSearchModal from "./NavSearchModal";

function Nav() {
    const [openLikeModal, setOpenLikeModal] = useState(false);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openRecentModal, setOpenRecentModal] = useState(false);
    const [openSearchModal, setOpenSearchModal] = useState(false);
    const onOpenLikeModal = () => {
        setOpenLikeModal(!openLikeModal);
    };
    const onOpenLoginModal = () => {
        setOpenLoginModal(!openLoginModal);
    };
    const onOpenRecentModal = () => {
        setOpenRecentModal(!openRecentModal);
    };
    const onOpenSearchModal = () => {
        setOpenSearchModal(!openSearchModal);
    };
    return (
        <header className="flex justify-between border-b border-gray-300 p-2">
            <Link
                to="/"
                className="flex items-center text-4xl text-brand gap-2"
            >
                <img
                    alt="YONGHAN"
                    src="images/YongHan.png"
                    className="w-16 h-16"
                />
                <h1>용한</h1>
            </Link>
            <nav className="flex items-center gap-4 font-semibold">
                {openSearchModal && (
                    <NavSearchModal onOpenSearchModal={onOpenSearchModal} />
                )}
                <div
                    className="cursor-pointer"
                    onClick={() => {
                        setOpenSearchModal(true);
                    }}
                >
                    <span className="material-symbols-outlined">search</span>
                </div>
                {openLikeModal && (
                    <NavLikeListModal onOpenLikeModal={onOpenLikeModal} />
                )}
                <div
                    className="cursor-pointer"
                    onClick={() => {
                        setOpenLikeModal(true);
                    }}
                >
                    <span className="material-symbols-outlined">thumb_up</span>
                </div>
                {openRecentModal && (
                    <NavRecentSeenModal onOpenRecentModal={onOpenRecentModal} />
                )}
                <div
                    onClick={() => {
                        setOpenRecentModal(true);
                    }}
                    className="cursor-pointer"
                >
                    <span className="material-symbols-outlined">home</span>
                </div>
                {openLoginModal && (
                    <NavLoginModal onOpenLoginModal={onOpenLoginModal} />
                )}
                <div
                    onClick={() => {
                        setOpenLoginModal(true);
                    }}
                    className="cursor-pointer"
                >
                    로그인
                </div>
            </nav>
        </header>
    );
}

export default Nav;
