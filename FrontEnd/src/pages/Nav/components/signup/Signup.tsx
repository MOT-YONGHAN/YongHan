import { useNavigate } from "react-router-dom";
import Input from "./components/Input";

function Signup() {
    const navigate = useNavigate();
    const handlePageChange = () => {
        navigate("/");
    };
    return (
        <div>
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
