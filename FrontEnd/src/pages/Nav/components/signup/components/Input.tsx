import { useState } from "react";

function Input() {
    const [nickname, setNickname] = useState<string>();
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [vaildPassword, setVildPassword] = useState<string>();
    const [form, setForm] = useState<object>({
        nickname,
        name,
        email,
        password,
    });

    const nicknameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);
    };
    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        if (!email?.includes("@") && !email?.includes(".")) {
            console.log("유효한 이메일이 아닙니다");
        }
    };
    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const isValidpassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVildPassword(event.target.value);
    };

    console.log(email);
    return (
        <div className="flex flex-col pt-10 h-full w-2/4 gap-4">
            <label className="flex flex-col" htmlFor="nickname">
                <div>
                    <span>Nickname</span>
                    {}
                </div>
                <input
                    id="nickname"
                    onChange={nicknameHandler}
                    className="border-b-2 focus:outline-none focus:border-b-3  focus:border-black"
                    type="text"
                    placeholder="닉네임을 입력하세요"
                />
            </label>
            <label className="flex flex-col" htmlFor="Name">
                Name
                <input
                    type="text"
                    onChange={nameHandler}
                    className="border-b-2 focus:outline-none focus:border-b-3  focus:border-black"
                    placeholder="이름을 입력하세요"
                />
            </label>

            <label className="flex flex-col" htmlFor="Email">
                Email
                <input
                    id="Email"
                    onChange={emailHandler}
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
                        onChange={passwordHandler}
                        className="border-b-2 focus:outline-none focus:border-b-3  focus:border-black"
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                    />
                    <input
                        id="Password"
                        onChange={isValidpassword}
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
