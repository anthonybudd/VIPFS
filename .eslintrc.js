module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'plugin:vue/essential',
        'standard'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    rules: {
        'no-multiple-empty-lines': 'off',
        'no-trailing-spaces': 'off',
        'no-multi-spaces': 'off',
        'padded-blocks': 'off',
        'comma-dangle': 'off',
        'no-console': 'off',
        'no-undef': 'off',
        'no-new': 'off',
        'indent': ['error', 4]
    }
}
