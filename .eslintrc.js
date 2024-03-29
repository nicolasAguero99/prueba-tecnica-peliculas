module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    "next/core-web-vitals",
    // 'eslint:recommended',
    // 'standard',
    "standard-with-typescript",
    'plugin:react/recommended',
  ],
  overrides: [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-undef": "off",
  }
}
