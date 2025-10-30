# 🧪 Cypress SauceDemo Web

Automação de testes end-to-end (E2E) desenvolvida com **Cypress** no site [SauceDemo](https://www.saucedemo.com/).  
Este projeto segue uma arquitetura limpa e modular, utilizando o padrão **Page Object Model**, **Custom Commands**, e suporte a **execução seletiva por tags** com o plugin `@cypress/grep`.

---

## 🚀 Objetivos

- Garantir a qualidade e estabilidade das funcionalidades principais do SauceDemo.  
- Servir como base de referência para automações E2E modernas com Cypress.  
- Aplicar boas práticas de arquitetura, organização e legibilidade de testes.  
- Permitir execução rápida de testes específicos via tags (`@smoke`, `@regression`, etc).

---

## 🧱 Tecnologias

| Tecnologia | Descrição |
|-------------|------------|
| **Cypress** | Framework de testes E2E moderno e rápido |
| **@cypress/grep** | Execução filtrada de testes por tags |
| **Node.js 20+** | Ambiente de execução JavaScript |
| **NPM** | Gerenciador de pacotes |

---

## ⚙️ Configuração

### 1️⃣ Instalar dependências

npm install

- Abrir Cypress no modo Interativo:
npm run open
# ou
npx cypress open

- Executar apenas os smoke tests
  npx cypress run --e2e --env "grepTags=@smoke

