import { RxMagnifyingGlass } from "react-icons/rx";

function Nav() {
    return (
        <div className="flex justify-between mt-3 ml-4 ">
            <div className="flex justify-between w-[1200px]">
                <span>YOUNG HAN</span>
                <div className="w-44 flex justify-between">
                    <button type="button">오늘의 운세</button>
                    <button type="button">최근 본 집</button>
                </div>
            </div>
            <div className="flex justify-between mr-4 w-20">
                <button type="button">로그인</button>
                <RxMagnifyingGlass size={25} />
            </div>
        </div>
    );
}

export default Nav;
