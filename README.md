# Projeto de Agenda Seja Best

# O projeto consiste em criar uma api que imite a agenda de contatos do celular

Desenvolvimento em camadas, separação de responsabilidades e maior testabilidade, a camada de domain representa as classes de dominio solicitadas conforme diagrama.

# 4 End-points estão disponíveis

1. Criar o contato
2. Listar um contato único
3. Filtrar o contato por nome
4. Atualizar o contato

# A relação entre pessoa e fone é de 0..1, ou seja, fone é uma entidade fraca

# Para rodar esse projeto

1. Clone esse repositório
2. Na raiz digite o comando `npm ci`
3. Rode as migrações de banco de dados `npm run run:migrate`
4. Rode `npm run dev`
5. Use o arquivo `seja_best_project.postman_collection.json` para testar as rotas no postam
6. Para documentação das rotas também foi usado o postman

# Testes unitarios

Foi abordado a criação de testes unitários e para isso usei o conceito de injeção de dependências para desacoplar os componentes
e me prover maior testabilidade para a aplicação

1. "test:cov": "jest --no-cache --maxWorkers=60% --coverage",
2. "test:dev": "jest --watch --runInBand --verbose",

## 👩‍💻 Responsavel

- [Jussara Sousa](https://github.com/SSar4)

## 🚀 Tecnologias

NodeJs - Runtime
Typescript - Ferramenta de desenvolvimento
Express - Servidor
NPM - Gerenciador de dependências

Feito com 💖 by Jussara Sousa 👋 [Fale com o criadorgit!](https://github.com/SSar4/)
