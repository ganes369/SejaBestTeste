module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'], // Padrão para arquivos de teste TypeScript
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
