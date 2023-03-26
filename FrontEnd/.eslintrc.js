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
        project: "./tsconfig.json",
    },
    ignorePatterns: [".eslintrc.js"],
    extends: [
        "airbnb",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "no-var": "warn",
        "no-multiple-empty-lines": "warn",
        eqeqeq: "warn",
        "dot-notation": "warn",
        "no-unused-vars": "warn",
        "react/jsx-pascal-case": "warn",
        "react/jsx-no-useless-fragment": "warn",
        "react/no-unused-state": "warn",
        "react/self-closing-comp": "warn",
        "react/jsx-curly-brace-presence": "warn",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "react/react-in-jsx-scope": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "import/prefer-default-export": "error",
        "react/jsx-props-no-spreading": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "import/no-extraneous-dependencies": 0,
        "react/jsx-filename-extension": [
            2,
            { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        ],
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
};
