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
    console.log(form);
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
                // socialTypeId: "LOCAL",

                // form,
            }),
        })
            .then((res) => res.json())
            .then((data) =>
                localStorage.setItem("accessToken", data.accessToken),
            );
    };

    return (
        <div className="fixed top-24 right-5  border-2 border-yonghancolor rounded-xl z-10  py-6  max-md:w-3/6  w-[350px] overflow-hidden">
            <form className="flex items-center justify-center flex-col gap-7">
                <Input />
                <button onClick={sendingData} type="submit">
                    완료
                </button>
            </form>
        </div>
    );
}
export default Signup;
