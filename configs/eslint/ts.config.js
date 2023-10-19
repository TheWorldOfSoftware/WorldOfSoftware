import { bannedImportPatterns, bannedImports } from "./js.config";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

const memberOrdering = {
  default: {
    order: "alphabetically"
  },

  classes: {
    memberTypes: [
      // Fields
      ["private-static-field", "private-static-get", "private-static-set"],
      ["#private-static-field", "#private-static-get", "#private-static-set"],
      ["protected-static-field", "protected-static-get", "protected-static-set"],
      ["public-static-field", "public-static-get", "public-static-set"],
      
      // Static initialization
      "static-initialization",

      // Index signature
      "signature",
      "call-signature",

      // Constructors"
      "constructor",

      // Methods
      "private-static-method",
      "#private-static-method",
      "protected-static-method",
      "public-static-method",
      "private-method",
      "#private-method",
      "protected-method",
      "public-method",
      "abstract-method"
    ]
  },
  interfaces: {
    memberTypes: [
      "static-field",
      "instance-field",
      "signature",
      "constructor",
      "static-method",
      "instance-method"
    ]
  },
  typeDefinitions: {
    memberTypes: [
      "private-static-field",
      "#private-static-field",
      "protected-static-field",
      "public-static-field",
      "private-instance-field",
      "#private-instance-field",
      "protected-instance-field",
      "public-instance-field",
      "signature",
      "constructor",
      "private-static-method",
      "#private-static-method",
      "protected-static-method",
      "public-static-method",
      "private-instance-method",
      "#private-instance-method",
      "protected-instance-method",
      "public-instance-method"
    ]
  }
},
namingConvention = [
  {
    selector: "default",

    format: ["camelCase"],
    leadingUnderscore: "forbid",
    trailingUnderscore: "forbid"
  },
  {
    modifiers: ["private"],
    selector: "property",

    leadingUnderscore: "allow"
  },
  {
    selector: "variableLike",

    leadingUnderscore: "allow"
  }
];

export default [
  typescript.configs["strict-type-checked"],
  typescript.configs["stylistic-type-checked"],
  {
    languageOptions: {
      parser: typescriptParser
    },
    plugins: {
      "@typescript-eslint": typescript
    },
    rules: {
      // Supported Rules
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/member-ordering": ["error", memberOrdering],
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/naming-convention": ["error", ...namingConvention],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/parameter-properties": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/prefer-readonly-parameter-types": "error",
      "@typescript-eslint/prefer-regexp-exec": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/sort-type-constituents": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",

      // Disable ESLint JavaScript rules
      "class-methods-use-this": "off",
      "default-param-last": "off",
      "init-declarations": "off",
      "no-dupe-class-members": "off",
      "no-extra-semi": "off",
      "no-invalid-this": "off",
      "no-loop-func": "off",
      "no-magic-numbers": "off",
      "no-redeclare": "off",
      "no-restricted-imports": "off",
      "no-shadow": "off",
      "no-unused-expressions": "off",
      "no-use-before-define": "off",
      "prefer-destructuring": "off",

      // Extension Rules
      "@typescript-eslint/class-methods-use-this": "warn",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/init-declarations": "warn",
      "@typescript-eslint/no-extra-semi": "error",
      "@typescript-eslint/no-loop-func": "warn",
      "@typescript-eslint/no-magic-numbers": "warn",
      "@typescript-eslint/no-restricted-imports": ["warn", { paths: bannedImports, patterns: bannedImportPatterns }],
      "@typescript-eslint/no-shadow": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/prefer-destructuring": "warn",
      "@typescript-eslint/return-await": "error"
    }
  }
];
