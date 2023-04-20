import { RxMagnifyingGlass } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { debounce } from "lodash";
import { searchInput, RootState } from "../../../modules/search";
import Recomand from "./Recomand";

function SearchBar() {
    const [recomands, setRecomands] = useState<object[]>();
    const dispatch = useDispatch();

    const searchinput = useSelector(
        (state: RootState) => state.searchReducer.input,
    );

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchInput(e.target.value));
        // fetch(`http://localhost:3000/src/assets/data/search`)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setRecomands(data);
        //         console.log(data);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    };

    const submitHandler = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        // search?search=${encodeURIComponent(searchinput)}
    };

    const debounceOnChange = debounce((event) => {
        inputHandler(event);
        console.log("debounce");
    }, 500);

    return (
        <div className="columns-auto relative">
            <form
                className="flex  items-center gap-3 "
                onSubmit={debounceOnChange}
            >
                <input
                    onChange={debounceOnChange}
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
