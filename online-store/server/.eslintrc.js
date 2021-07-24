module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "indent": "off",
        "quotes": "off",
        "comma-dangle": "off",
        "semi" : "off",
        "space-before-blocks" : "off",
        "func-call-spacing" : "off",
        "key-spacing" : "off"
    }
};
