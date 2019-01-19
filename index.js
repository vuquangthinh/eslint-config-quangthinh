module.exports = {
  globals: {
    MyGlobal: true
  },
  extends: 'rallycoding',
  rules: {
    indent: ['warn', 2],
    'no-underscore-dangle': 'off',
    'global-require': 'off',
    'no-unused-expressions': 'off',
    camelcase: 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all'
      }
    ],

    'no-console': ['error'],
    'react/forbid-prop-types': ['off'],
    'react/prop-types': ['warn'],
    'react/jsx-no-bind': ['off'],
    'react/jsx-indent': ['off'],
    'react/jsx-indent-props': ['off'],
    'react/jsx-filename-extension': ['off'],
    'import/no-named-as-default': ['off'],
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true
      }
    ]
  }
};
