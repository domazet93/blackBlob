module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
      "sourceType": "module"
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "globals": {
        "Vue": true
    },
    "plugins": [
        "html"
    ],
    "extends": "eslint:recommended",
    "rules": {
        "no-undef-init": "off",
        "no-unused-vars": "off",
        "no-console": 0,
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
