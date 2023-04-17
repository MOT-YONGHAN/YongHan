import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OutsideClick from "./OutsideClick";
import { recomand, loginRootState } from "../../../modules/LoginModal";

function Recomand() {
    const [recommendations, setRecommendations] = useState<string[]>([
        "apple",
        "banana",
        "cherry",
    ]);
    const out = useSelector(
        (state: loginRootState) => state.modalReducer.recomand,
    );

    const dispatch = useDispatch();
    const handleoutClick = () => {
        dispatch(recomand());
    };
    return (
        <OutsideClick onOutsideClick={handleoutClick}>
            {out && (
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-96">
                    {recommendations.map((recommendation) => (
                        <div
                            key={recommendation}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {recommendation}
                        </div>
                    ))}
                </div>
            )}
        </OutsideClick>
    );
}

export default Recomand;
