import { useDispatch, useSelector } from "react-redux";
import OutsideClick from "./OutsideClick";
import { likeModal, loginRootState } from "../../../modules/LoginModal";

function Save() {
    const dispatch = useDispatch();
    const modalhandler: boolean = useSelector(
        (state: loginRootState) => state.modalReducer.likemodal,
    );

    const handleOutsideClick = () => {
        return modalhandler && dispatch(likeModal());
    };
    return (
        <OutsideClick onOutsideClick={handleOutsideClick}>
            <div className="fixed  z-10 w-40">
                <div className=" border-2 px-4 py-2 rounded-lg ">
                    <p>내용을 입력하세요.</p>
                </div>
            </div>
        </OutsideClick>
    );
}

export default Save;
