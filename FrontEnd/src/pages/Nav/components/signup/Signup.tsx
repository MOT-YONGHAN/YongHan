import { useNavigate } from "react-router-dom";
import Input from "./components/Input";

function Signup() {
    const navigate = useNavigate();
    const handlePageChange = () => {
        navigate("/");
    };
    return (
        <div className="fixed top-24 right-5  border-2 border-yonghancolor rounded-xl z-10  py-6  max-md:w-3/6  w-[350px] overflow-hidden">
            <form className="flex items-center justify-center flex-col gap-7">
                <Input />
                <button onClick={handlePageChange} disabled type="submit">
                    완료
                </button>
            </form>
        </div>
    );
}
export default Signup;
