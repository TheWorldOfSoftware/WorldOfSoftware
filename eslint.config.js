import js, { bannedKeywords } from "./configs/eslint/js.config.js";

const permittedKeywords = ["default"];

export default [
  ...js,
  {
    files: ["configs/eslint/ts.config.js"],
    rules: {
      "id-denylist": ["error", ...bannedKeywords.filter(keyword => !permittedKeywords.includes(keyword))]
    }
  }
];
