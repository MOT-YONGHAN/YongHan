import { useSelector, useDispatch } from "react-redux";
import { formAction, RootState } from "../../../../../modules/form";

function Input() {
    const dispatch = useDispatch();
    const form = useSelector((state: RootState) => state.formReducer);

    const nicknameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(formAction.nicknameHandler(event.target.value));
    };
    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(formAction.nameHandler(event.target.value));
    };
    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(formAction.emailHandler(event.target.value));
    };
    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(formAction.passwordHandler(event.target.value));
    };
    const isValidpassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(formAction.vaildpasswordsHandler(event.target.value));
    };

    const sendingForm = () => {
        fetch("http://10/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(form),
        })
            .then((response) => response.json())
            .catch((error) => {
                console.log(error); // Handle error
            });
    };

    return (
        <div className="flex flex-col pt-10 h-full w-3/4 gap-4">
            <label className="flex flex-col" htmlFor="nickname">
                <div>
                    <span>Nickname</span>
                </div>
                <input
                    name="nickname"
                    onChange={nicknameHandler}
                    className="border-b-2 focus:outline-none focus:border-b-3  focus:border-black"
                    type="text"
                    placeholder="닉네임을 입력하세요"
                />
            </label>
            <label className="flex flex-col" htmlFor="name">
                Name
                <input
                    name="name"
                    type="text"
                    onChange={nameHandler}
                    className="border-b-2 focus:outline-none focus:border-b-3  focus:border-black"
                    placeholder="이름을 입력하세요"
                />
            </label>

            <label className="flex flex-col" htmlFor="email">
                Email
                {form.email &&
                    !(form.email.includes("@") && form.email.includes(".")) && (
                        <span className="isvaild">이메일을 확인하세요!</span>
                    )}
                <input
                    name="email"
                    onChange={emailHandler}
                    className="border-b-2 focus:outline-none focus:border-b-3  focus:border-black"
                    type="text"
                    placeholder="이메일을 입력하세요"
                />
            </label>

            <label className="flex flex-col gap-1" htmlFor="password">
                Password
                {form.password && form.password.length < 8 && (
                    <span className="isvaild">8자리이상 입력하세요! </span>
                )}
                <div className="flex flex-col gap-5">
                    <input
                        name="password"
                        onChange={passwordHandler}
                        className="border-b-2 focus:outline-none focus:border-b-3  focus:border-black"
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                    />
                    {form.vaildPassword &&
                        !(form.password === form.vaildPassword) && (
                            <span className="isvaild">
                                비밀번호가 다릅니다!
                            </span>
                        )}
                    <input
                        name="vaildPassword"
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
