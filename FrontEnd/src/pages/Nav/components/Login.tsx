import React from "react";
import { useSelector } from "react-redux";
import { loginRootState } from "../../../modules/LoginModal"; // RootState로 import 수정
import FormChange from "./FormChange";
import Signup from "./signup/Signup";

function Login() {
    const formhandler: boolean = useSelector(
        (state: loginRootState) => state.modalReducer.ismodal, // RootState로 타입 변경
    );
    return formhandler ? <FormChange /> : <Signup />; // 조건부 렌더링 수정
}

export default Login;
