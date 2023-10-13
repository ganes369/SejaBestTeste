module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"], // Padrão para arquivos de teste TypeScript
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  collectCoverage: true, // Ativa a coleta de cobertura de código
  coverageDirectory: "./coverage", // Diretório onde os relatórios de cobertura serão armazenados
  coverageReporters: ["lcov", "text-summary"], // Formatos de relatório desejados
}
