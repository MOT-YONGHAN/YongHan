import { RxMagnifyingGlass } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { searchInput, RootState } from "../../../modules/search";
import Recomand from "./Recomand";

function SearchBar() {
    const [recomands, setRecomands] = useState<string[]>([]);
    const dispatch = useDispatch();
    const form = useSelector((state: RootState) => state.searchReducer);
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchInput(e.target.value));
    };
    const submitHandler = () => {
        fetch("", {
            method: "GET",
            headers: {},
        })
            .then((res) => res.json())
            .then((res) => console.log(res));
    };

    return (
        <div className="columns-auto relative">
            <form
                className="flex  items-center gap-3 "
                onSubmit={submitHandler}
            >
                <input
                    onChange={inputHandler}
                    className="focus:outline-none focus:border-yonghancolor p-2 border-2  rounded-xl w-96 h-10"
                    type="search"
                    placeholder="검색어를 입력하세요."
                />
                <RxMagnifyingGlass className="cursor-pointer" size={25} />
            </form>
            <div className="absolute left-0 right-0 top-12">
                <Recomand />
            </div>
        </div>
    );
}

export default SearchBar;
