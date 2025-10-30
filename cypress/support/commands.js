Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  if (username) cy.get('[data-test="username"]').type(username)
  if (password) cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})