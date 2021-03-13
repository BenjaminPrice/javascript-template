module.exports = {
  moduleFileExtensions: [`js`, `jsx`, `json`, `vue`, `ts`, `tsx`],
  transformIgnorePatterns: [`/node_modules/`],
  moduleNameMapper: {
    "^@/(.*)$": `<rootDir>/src/$1`,
  },
  preset: `@vue/cli-plugin-unit-jest`,
  testMatch: [`**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)`],
}
