module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        amd: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    parserOptions: {
        project: "./tsconfig.json",
    },
    ignorePatterns: [".eslintrc.js"],
    extends: [
        "airbnb", // or airbnb-base
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:jsx-a11y/recommended", // 설치 한경우
        "plugin:import/errors", // 설치한 경우
        "plugin:import/warnings", // 설치한 경우
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "no-var": "warn", // var 금지
        "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
        "no-console": ["warn", { allow: ["warn", "error"] }], // console.log() 금지
        eqeqeq: "warn", // 일치 연산자 사용 필수
        "dot-notation": "warn", // 가능하다면 dot notation 사용
        "no-unused-vars": "warn", // 사용하지 않는 변수 금지
        "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
        "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
        "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
        "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
        "react/no-unused-state": "warn", // 사용되지 않는 state
        "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
        "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
        "react/jsx-curly-brace-presence": "warn", // jsx 내 불필요한 중괄호 금지
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "linebreak-style": 0,
        "import/prefer-default-export": 0,
        "import/extensions": 0,
        "no-use-before-define": 0,
        "import/no-unresolved": 0,
        "react/react-in-jsx-scope": 0,
        "import/no-extraneous-dependencies": 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
        "no-shadow": 0,
        "react/prop-types": 0,
        "react/jsx-filename-extension": [
            2,
            { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        ],
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
};
