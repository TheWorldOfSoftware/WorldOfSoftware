import baseConfig from "./configs/eslint/base.config.js";

export default [
  ...baseConfig,
  {
    files: [
      "packages/**/*",
      "configs/**/*"
    ]
  }
];
