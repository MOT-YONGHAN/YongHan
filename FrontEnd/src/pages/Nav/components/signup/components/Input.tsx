function Input() {
    return (
        <div className="flex flex-col pt-10 h-full w-1/3 gap-4">
            <label className="flex flex-col" htmlFor="nickname">
                Nickname
                <input
                    id="nickname"
                    className="border-b-2 focus:outline-none focus:border-b-3  focus:border-black"
                    type="text"
                    placeholder="닉네임을 입력하세요"
                />
            </label>
            <label className="flex flex-col" htmlFor="Name">
                Name
                <input
                    type="text"
                    className="border-b-2 focus:outline-none focus:border-b-3  focus:border-black"
                    placeholder="이름을 입력하세요"
                />
            </label>

            <label className="flex flex-col" htmlFor="Email">
                Email
                <input
                    id="Email"
                    className="border-b-2 focus:outline-none focus:border-b-3  focus:border-black"
                    type="text"
                    placeholder="이메일을 입력하세요"
                />
            </label>

            <label className="flex flex-col gap-1" htmlFor="Password">
                Password
                <div className="flex flex-col gap-5">
                    <input
                        id="Password"
                        className="border-b-2 focus:outline-none focus:border-b-3  focus:border-black"
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                    />
                    <input
                        id="Password"
                        className="border-b-2 focus:outline-none focus:border-b-3  focus:border-black"
                        type="password"
                        placeholder="비밀번호를 재입력하세요"
                    />
                </div>
            </label>
        </div>
    );
}

export default Input;
