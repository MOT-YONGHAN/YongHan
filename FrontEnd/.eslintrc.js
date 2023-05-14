module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        amd: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier", "import", "react-hooks"],
    parserOptions: {
        project: ["./tsconfig.json", "tailwind.config.js"],
    },
    ignorePatterns: [".eslintrc.js", "postcss.config.js"],
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
        "import/prefer-default-export": ["off"],
        // "react/no-unused-state": "warn", // 사용되지 않는 state
        "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "react/prop-types": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        // "no-unused-vars": "error",
        "linebreak-style": 0,
        "import/extensions": 0,
        "no-use-before-define": 0,
        "import/no-unresolved": 0,
        "react/react-in-jsx-scope": 0,
        "import/no-extraneous-dependencies": 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
        "no-shadow": 0,
        "react/jsx-filename-extension": [
            2,
            { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        ],
        // "jsx-a11y/no-noninteractive-element-interactions": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
};

// "dot-notation": "warn", // 가능하다면 dot notation 사용
// "no-unused-vars": "warn", // 사용하지 않는 변수 금지
// "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
// "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
// "react/jsx-props-no-spreading": "error",
//"@typescript-eslint/no-empty-interface": "error",
