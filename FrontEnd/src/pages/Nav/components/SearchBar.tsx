import { RxMagnifyingGlass } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { searchInput, RootState } from "../../../modules/search";

function SearchBar() {
    const dispatch = useDispatch();
    const form = useSelector((state: RootState) => state.searchReducer);
    console.log("search", form);
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchInput(e.target.value));
    };
    const submitHandler = () => {
        fetch("", {
            method: "POST",
            headers: {},
            body: "",
        })
            .then((res) => res.json())
            .then((res) => console.log(res));
    };

    return (
        <div>
            <form className="flex items-center gap-3" onSubmit={submitHandler}>
                <input
                    onChange={inputHandler}
                    className="focus:outline-none focus:border-yonghancolor p-2 border-2  rounded-xl w-96 h-10"
                    type="search"
                    placeholder="검색어를 입력하세요."
                />
                <RxMagnifyingGlass className="cursor-pointer" size={25} />
            </form>
        </div>
    );
}

export default SearchBar;
