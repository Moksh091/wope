import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-unused-vars": "off", // Example: Disable "no-unused-vars"
      "@typescript-eslint/no-unused-vars": "off", // disable the typescript version
      "react/prop-types": "warn",
      "@next/next/no-img-element": "off",

      "@typescript-eslint/no-explicit-any": "off",
      // Example: Turn "react/prop-types" into a warning
      // Add other rules you want to disable or modify here
    },
  },
];

export default eslintConfig;
