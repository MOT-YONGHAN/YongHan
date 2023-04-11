import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Input from "./components/Input";
import { RootState } from "../../../../modules/form";

function Signup() {
    const navigate = useNavigate();
    const handlePageChange = () => {
        navigate("/");
    };
    const form = useSelector((state: RootState) => state.formReducer);
    const [isAllValid, setPwVaild] = useState(false);
    const [vaild, setVaild] = useState("");
    const vaildHandler = (data: string) => {
        setVaild(data);
    };

    const sendingData = () => {
        fetch("http://172.30.17.172:3000/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: form.name,
                nickname: form.nickname,
                email: form.email,
                password: form.password,
            }),
        })
            .then((res) => res.json())
            .then((data) =>
                localStorage.setItem("accessToken", data.accessToken),
            );
    };
    useEffect(() => {
        const validtest = () => {
            return (
                form.nickname &&
                form.nickname.length <= 10 &&
                form.name &&
                form.name.length <= 10 &&
                form.email &&
                form.email.length <= 50 &&
                form.email.includes("@") &&
                form.email.includes(".") &&
                // form.password.match(
                //     /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})$/,
                // ) &&
                form.password === vaild
            );
        };
        if (validtest()) {
            setPwVaild(true);
        } else {
            setPwVaild(false);
        }
    }, [form, vaild]);
    return (
        <div className="fixed top-24 right-5  border-2 border-yonghancolor rounded-xl z-10  py-6  max-md:w-3/6  w-[350px] overflow-hidden">
            <form className="flex items-center justify-center flex-col gap-7">
                <Input vaildHandler={vaildHandler} />
                <button
                    onClick={sendingData}
                    disabled={!isAllValid}
                    type="submit"
                >
                    완료
                </button>
            </form>
        </div>
    );
}
export default Signup;
