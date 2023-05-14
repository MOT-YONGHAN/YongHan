import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../modules/form";
import FormChange from "./FormChange";
import Signup from "./signup/Signup";
import OutsideClick from "./OutsideClick";
import { loginRootState, login } from "../../../modules/LoginModal";

function Login() {
    const formhandler: boolean = useSelector(
        (state: RootState) => state.modalReducer.ismodal,
    );
    const dispatch = useDispatch();
    const modalhandler: boolean = useSelector(
        (state: loginRootState) => state.modalReducer.login,
    );

    const handleOutsideClick = () => {
        return modalhandler && dispatch(login());
    };
    return (
        <OutsideClick onOutsideClick={handleOutsideClick}>
            {formhandler ? <FormChange /> : <Signup />}
        </OutsideClick>
    );
}

export default Login;
