module.exports = {
  plugins: ["lodash"],
  extends: ["plugin:lodash/recommended"],
  rules: {
    "lodash/import-scope": [2, "method"],
  },
};
