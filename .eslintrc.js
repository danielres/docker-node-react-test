module.exports = {
  "extends": [
    "prettier",
    "prettier/react"
  ],

  "plugins": [
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true,
      "modules": true
    }
  },
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "trailingComma": "es5",
      "semi": false,
      "printWidth": 70,
    }],
  }
}