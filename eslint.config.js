import { js, ts } from "@worldofsoftware/configs/eslint";

export default [
  {
    ...js,
    ignores: [...js.ignores, "configurations/**/*.js", "packages/**/*.js"]
  },
  {
    ...ts,
    ignores: [...ts.ignores, "configurations/**/*.ts", "packages/**/*.ts"]
  }
];
