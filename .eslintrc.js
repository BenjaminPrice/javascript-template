module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [`plugin:vue/essential`, `eslint:recommended`, `@vue/prettier`],

  parserOptions: {
    parser: `babel-eslint`,
  },

  plugins: [`prettier`],

  rules: {
    "prettier/prettier": `error`,
    "no-console": process.env.NODE_ENV === `production` ? `warn` : `off`,
    "no-debugger": process.env.NODE_ENV === `production` ? `warn` : `off`,
    "comma-dangle": [`error`, `always-multiline`],
    "comma-style": [`error`, `last`],
    "comma-spacing": [`error`, { before: false, after: true }],
    curly: [`error`, `multi-or-nest`],
    "no-multi-spaces": [
      `error`,
      {
        exceptions: {
          Property: true,
          VariableDeclarator: true,
          ImportDeclaration: true,
        },
      },
    ],
    "key-spacing": [
      `error`,
      { beforeColon: false, afterColon: true, mode: `minimum` },
    ],
    "eol-last": [`error`, `always`],
    indent: [`error`, 2, { SwitchCase: 1, VariableDeclarator: 1 }],
    "no-mixed-spaces-and-tabs": [`error`],
    "no-trailing-spaces": [`error`],
    "no-nested-ternary": [`error`],
    "no-unneeded-ternary": [`error`],
    "no-delete-var": [`error`],
    "no-undef": [`error`],
    "no-unused-vars": [`error`, { args: `after-used` }],
    "no-var": [`error`],
    "no-const-assign": [`error`],
    "no-use-before-define": [`error`, `nofunc`],
    "prefer-const": [`error`],
    semi: [`error`, `never`],
    quotes: [`error`, `backtick`],
    strict: [`error`, `safe`],
    "spaced-comment": [`error`, `always`, { exceptions: [`-`, `+`, `*`] }],
  },

  overrides: [
    {
      files: [
        `**/__tests__/*.{j,t}s?(x)`,
        `**/tests/unit/**/*.spec.{j,t}s?(x)`,
        `**/*.spec.{j,t}s?(x)`,
      ],
      env: {
        jest: true,
      },
    },
  ],
}
