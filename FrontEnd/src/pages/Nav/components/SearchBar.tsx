import { RxMagnifyingGlass } from "react-icons/rx";

function SearchBar() {
    return (
        <div className="flex items-center gap-3">
            <form>
                <input
                    className="focus:outline-none focus:border-yonghancolor p-2 border-2  rounded-xl w-96 h-10"
                    type="search"
                    placeholder="검색어를 입력하세요."
                />
            </form>
            <RxMagnifyingGlass className="cursor-pointer" size={25} />
        </div>
    );
}

export default SearchBar;
