import { useDispatch, useSelector } from "react-redux";
import OutsideClick from "./OutsideClick";
import { lastestModal, loginRootState } from "../../../modules/LoginModal";

function Lastest() {
    const dispatch = useDispatch();
    const modalhandler: boolean = useSelector(
        (state: loginRootState) => state.modalReducer.lastestmodal,
    );

    const handleOutsideClick = () => {
        console.log(modalhandler);

        return modalhandler && dispatch(lastestModal());
    };
    return (
        <div className="fixed  z-10 w-40">
            <OutsideClick onOutsideClick={handleOutsideClick}>
                <div className=" border-2 px-4 py-2 rounded-lg ">
                    <p>내용을 입력하세요.</p>
                </div>
            </OutsideClick>
        </div>
    );
}

export default Lastest;
