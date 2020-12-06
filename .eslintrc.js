module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'prettier'],
    plugins: ['import', 'jest', 'prettier'],
    rules: {
        'no-await-in-loop': [0],
        'no-continue': [0],
        'prettier/prettier': 'error',
        'import/no-extraneous-dependencies': [0],
        'import/prefer-default-export': [0],
        'no-restricted-syntax': [0],
        'no-plusplus': [0],
        'react/destructuring-assignment': [0],
        'no-nested-ternary': [0],
    },
    env: {
        'jest/globals': true,
    },
};
